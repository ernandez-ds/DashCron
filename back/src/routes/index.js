const express = require("express"); // carrega o express
const router = express.Router(); //Ativando as rotas

// As rotas possuem uma ligação direta com o arquivo Controlador
const commandsController = require("../controllers/commandsController");

router.get("/", (req, res) => res.redirect("crontabl")); // redirecionamento de rotas
router.get("/crontabl", commandsController.index); // delega a definição de rota a um arquivo

module.exports = router;
