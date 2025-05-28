import React, { useState } from "react";

function ReminderImage({ onBack }) {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);

    try {
      // 예시용 placeholder 이미지 생성 로직
      const fakeImageUrl = `https://via.placeholder.com/512x300.png?text=${encodeURIComponent(inputText)}`;
      setTimeout(() => {
        setImageUrl(fakeImageUrl);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error("이미지 생성 실패", err);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <h2>나만의 가치 리마인드 이미지 만들기</h2>
      <textarea
        rows={3}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="예: 나는 자연과 함께 살아가고 싶다"
        style={{ width: "100%", padding: "1rem", fontSize: "1rem", marginBottom: "1rem" }}
      />

      <div>
        <button
          onClick={handleGenerate}
          disabled={isLoading || !inputText.trim()}
          style={{
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: isLoading ? "not-allowed" : "pointer",
            marginRight: "1rem"
          }}
        >
          {isLoading ? "이미지 생성 중..." : "이미지 만들기"}
        </button>

        <button
          onClick={onBack}
          style={{
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#ccc",
            color: "#000",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          ← 이전
        </button>
      </div>

      {imageUrl && (
        <div style={{ marginTop: "2rem" }}>
          <img src={imageUrl} alt="리마인드 이미지" style={{ maxWidth: "100%", borderRadius: "12px" }} />
          <p style={{ marginTop: "1rem", color: "#555" }}>이미지를 저장하거나 배경화면으로 사용해보세요!</p>
        </div>
      )}
    </div>
  );
}

export default ReminderImage;