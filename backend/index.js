import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/recommend", async (req, res) => {
  const { concern } = req.body;
  const prompt = `다음은 한 사람이 고민 중인 내용이다: "${concern}"\\n\\n이 사람을 도울 수 있는 구체적인 행동 3가지를 제안해줘.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ suggestions: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).send("OpenAI 요청 실패");
  }
});

app.listen(3001, () => {
  console.log("백엔드 서버가 http://localhost:3001 에서 실행 중입니다.");
});
