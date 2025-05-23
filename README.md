# Valoo_mvp

# 🤖 AI 행동 추천 앱 (AI Action Recommendation App)

이 프로젝트는 사용자의 고민을 입력받고, OpenAI GPT 모델을 사용해 이에 대한 구체적인 **행동 추천**을 제공하는 간단한 MVP 웹 애플리케이션입니다.

## 🔧 기술 스택

- Frontend: React (CRA)
- Backend: Node.js + Express
- AI: OpenAI GPT-4o API 사용
- 환경변수 관리: dotenv

---

## 🖥️ 기능

- 사용자는 "지금 고민 중인 내용"을 입력합니다.
- "행동 추천 받기" 버튼을 클릭하면, GPT가 3가지 구체적인 행동을 제안해줍니다.
- 한 번 추천을 받은 후에는 버튼 문구가 **"다른 행동 추천받기"**로 바뀝니다.
- 로딩 중에는 버튼이 **"로딩 중..."** 으로 바뀌고 비활성화됩니다.

---

## 🚀 실행 방법

### 1. 백엔드 실행

```bash
cd backend
cp .env.example .env
# .env 파일에 OpenAI API 키 입력
npm install
npm start
```

- `.env` 파일 예시:
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2. 프론트엔드 실행

```bash
cd frontend
npm install
npm start
```

- 브라우저에서: http://localhost:3000

---

## 📁 프로젝트 구조

```
ai-advice-app/
├── backend/
│   ├── index.js         # Node.js 서버 및 OpenAI 연동
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── App.jsx      # 메인 리액트 컴포넌트
    │   └── index.js     # React 진입점
    ├── public/
    │   └── index.html
    └── package.json
```

---

## ⚠️ 주의

- OpenAI API 키는 절대 커밋하거나 배포하지 마세요.
- 이 프로젝트는 학습 및 실험용 MVP로 제공됩니다.

---

**문의**: yeunkim1230@gmail.com
