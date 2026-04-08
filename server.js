import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/grok", async (req, res) => {
  try {
    const { question } = req.body;

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
            content: "Você é um tutor de matemática que explica passo a passo em português,."
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
  res.send("API Grok rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});