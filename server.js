import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

/*
API principal

exemplo:
https://apikaios.onrender.com/grok/pergunta=2+2
*/

app.get("/grok/pergunta=:question", async (req, res) => {
  try {

    const question = decodeURIComponent(req.params.question);

    const response = await fetch("https://api.x.ai/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.XAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "grok-4.20-reasoning",
        input: [
          {
            role: "system",
            content: "Você é um tutor de matemática que responde em português explicando passo a passo."
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();

    res.json({
      question: question,
      explanation: data.output_text || "Sem resposta."
    });

  } catch (err) {

    res.status(500).json({
      error: "Erro interno",
      details: String(err)
    });

  }
});

app.get("/", (req, res) => {
  res.send("API Kaio's Academy rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
