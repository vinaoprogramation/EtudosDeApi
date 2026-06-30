const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "escola",
  database: "testes_db"
});

module.exports = conexao;