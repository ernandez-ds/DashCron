const express = require("express"); // npm install express
const routes = require("./routes"); // ativando a rota

const app = express(); // carregando a aplicação

app.use(express.static("public")); // define os arquivos da pasta publica serão disponibilizados de forma estática pelo express

app.use(routes); // Define o arquivo de rotas

app.listen(3000, () => {
  console.log("Servidor Commands Linux App is running!");
});

// EXERCÍCIO BASEADO EM:
// https://codesandbox.io/s/semana-9-exercicio-chamada-de-sistema-v2-bh8ou?file=/src/lib.js
