# 🎓 Kaio's Academy - KhanWare

**KhanWare** é um script criado pela **Chanz Store** para ajudar estudantes dentro do **Khan Academy**, trazendo suporte de IA para explicar questões diretamente no navegador.

---

# 🚀 Sobre o Projeto

O **KhanWare** detecta automaticamente a questão exibida no Khan Academy e envia o texto para uma API com IA que retorna uma **explicação da resolução**.

Isso ajuda você a entender melhor como resolver exercícios de matemática.

---

# 🧠 Como Funciona

Fluxo do sistema:

O script:

1. Detecta automaticamente a questão.
2. Envia o texto para a API.
3. Recebe a explicação da IA.
4. Mostra no console do navegador.

---

# 📦 Como Usar o KhanWare

## 1️⃣ Abra o Khan Academy

Entre no site:

Abra qualquer exercício.

---

## 2️⃣ Abra o Console do Navegador

Pressione:

---

## 3️⃣ Cole o Script

Cole o script **KhanWare** no console.

Exemplo:

```javascript
console.log("%c[KHANWARE] Tentando detectar questão...", "color:#2ecc71; font-weight:bold");

const questionText =
  document.querySelector('div[data-test-id="question-content"]')?.innerText ||
  document.querySelector('.perseus-renderer')?.innerText ||
  "Não encontrou texto da questão";

console.log("Texto da questão detectado:", questionText.substring(0, 150) + "...");

async function askTutorApi(question) {
  const res = await fetch("https://apikaios.onrender.com/grok", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  return await res.json();
}

(async () => {
  const aiData = await askTutorApi(questionText);

  if (aiData?.explanation) {
    console.log("%c[KHANWARE][IA] Explicação:", "color:#3498db; font-weight:bold");
    console.log(aiData.explanation);
  } else {
    console.log("%c[KHANWARE] Nenhuma explicação retornada.", "color:red");
  }
})();


🌎 Comunidade Chanz Store

Se curtiu o projeto, fortalece a comunidade 👇

🛒 Loja

https://chanzseven.erbystore.com/

💬 Discord

https://dc.gg/chanzseven

📢 Telegram

https://t.me/chanzseven

🎵 TikTok

https://tiktok.com/chanzseven