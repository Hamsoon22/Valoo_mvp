import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

function ResultPage({ results, importance, commitment, onReset, onNext }) {
  if (!results || !importance || !commitment) {
    return <div>결과를 불러오는 중입니다...</div>;
  }

  const chartData = results.feedback1.map((label, i) => ({
    label,
    importance: importance[i],
    commitment: commitment[i],
  }));

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '12px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        설문 결과 요약
      </h2>

      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <p>💡 높은 가치를 둔 영역: <strong>{results.feedback1.join(", ") || "없음"}</strong></p>
        <p>🌀 전념이 부족한 영역: <strong>{results.feedback2.join(", ") || "없음"}</strong></p>
        <p>📊 종합 점수: <strong>{results.score.toFixed(2)}</strong></p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={chartData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="importance" stroke="#8884d8" name="가치" />
          <Line type="monotone" dataKey="commitment" stroke="#82ca9d" name="전념" />
        </ComposedChart>
      </ResponsiveContainer>

      <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          onClick={onReset}
          style={{ padding: '0.7rem 2rem', backgroundColor: '#ccc', borderRadius: '8px' }}
        >
          다시 하기
        </button>
        <button
          onClick={onNext}
          style={{ padding: '0.7rem 2rem', backgroundColor: '#000', color: '#fff', borderRadius: '8px' }}
        >
          행동 추천 보기 →
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
