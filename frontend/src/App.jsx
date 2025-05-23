import React, { useState } from "react";

function App() {
  const [concern, setConcern] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ concern }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`오류: ${error.error}`);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setSuggestions(data.suggestions);
      setHasFetched(true);
    } catch (err) {
      console.error("fetch 에러:", err);
      alert("서버에 연결할 수 없습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>나의 지금 고민은?</h2>
      <textarea
        rows={5}
        value={concern}
        onChange={(e) => setConcern(e.target.value)}
        placeholder="지금 고민 중인 내용을 적어보세요."
        style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
      />

      <button
        onClick={handleSubmit}
        type="button"
        disabled={isLoading || !concern.trim()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          cursor: isLoading ? "not-allowed" : "pointer",
          backgroundColor: isLoading ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {isLoading
          ? "로딩 중..."
          : hasFetched
          ? "다른 행동 추천받기"
          : "행동 추천 받기"}
      </button>

      {suggestions && (
        <div style={{ marginTop: "2rem", whiteSpace: "pre-wrap" }}>
          <h3>AI 추천 행동:</h3>
          <p>{suggestions}</p>
        </div>
      )}
    </div>
  );
}

export default App;