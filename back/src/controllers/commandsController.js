const Comando = require("../utils/crontab");

const index = (req, res) => {
  const output = Comando.listTask();
  const teste = {"ano": 2012};
  console.log("listTask: "+output);
  res.json(output);
};

module.exports = { index };