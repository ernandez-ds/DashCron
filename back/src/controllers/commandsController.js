const Comando  = require("../utils/crontab");

const index = async (req, res) => {
  const output = await Comando.listTask();
  res.json(output);
};

module.exports = { index };