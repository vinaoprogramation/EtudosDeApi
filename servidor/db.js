const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31415122448",
  database: "testes_db"
});

module.exports = conexao;