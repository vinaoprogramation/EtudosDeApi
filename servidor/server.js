const express = require("express");
const cors = require("cors");
const conexao = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// MÉTODOS RELACIONADOS AO ZUSTAND DE USUÁRIOS

app.get("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";

  conexao.query(sql, (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao buscar usuários" });
    }

    res.json(resultado);
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


app.post("/usuarios", (req, res) => {
  const { nome, email, senha, cidade } = req.body;

  const sql = "INSERT INTO usuarios (nome, email, senha, cidade) VALUES (?, ?, ?, ?)";

  conexao.query(sql, [nome, email, senha, cidade], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao criar usuário" });
    }

    res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      id: resultado.insertId
    });
  });
});


app.post("/usuarios/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Email e senha são obrigatórios." });
  }

  try {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    conexao.query(sql, [email], (err, resultados) => {
      if (err) {
        return res.status(500).json({ erro: "Erro no banco de dados." });
      }

      if (resultados.length === 0) {
        return res.status(401).json({ erro: "Usuário não encontrado." });
      }

      const senhaCorreta = (Number(senha) === resultados[0].senha);
      const usuario = resultados[0];

      if (!senhaCorreta) {
        return res.status(401).json({ erro: "Senha inválida." });
      }

      console.log("Logado");

      return res.status(200).json({
        logado: true,
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          cidade: usuario.cidade
        }
      });

    });
  } catch (error) {
    return res.status(500).json({ erro: "Erro inesperado no servidor." });
  }
});



// ----MÉTODOS RELACIONADOS AO ZUSTAND DE PRODUTOS E COMPRAS

// MÉTODOS DE ADIÇÃO E BUSCA DA TABELA produtos
app.get("/produtos", (req, res) => {
  const sql = "SELECT * FROM produtos";

  conexao.query(sql, (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao buscar produtos" });
    }

    res.json(resultado);
  });
});



app.post("/produtos", (req, res) => {
  const { nome, valor, descricao, imagem, cor } = req.body;

  const sql = "INSERT INTO produtos (nome, valor, descricao, imagem, cor) VALUES (?, ?, ?, ?, ?)";

  conexao.query(sql, [nome, valor, descricao, imagem, cor], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao criar produto" });
    }

    res.status(201).json({
      mensagem: "Produto criado com sucesso",
      id: resultado.insertId
    });
  });
});



// MÉTODOS DE ADIÇÃO E BUSCA DA TABELA compras

//ADIÇÃO
app.post("/compras", (req, res) => {
  const { id_usuario, id_produto } = req.body;

  const sql = "INSERT INTO compras (id_usuario, id_produto) VALUES (?, ?)";

  conexao.query(sql, [id_usuario, id_produto], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao realizar compra" });
    }

    res.status(201).json({
      mensagem: "Compra realizada com sucesso",
      id: resultado.insertId
    });
  });
});

//BUSCA
app.get("/compras/:id_usuario", (req, res) => {
  const id = req.params.id_usuario;

  const sql = "SELECT c.id_compra, c.status, u.nome, p.nome, p.valor, p.imagem, p.descricao FROM compras c INNER JOIN usuarios u ON c.id_usuario = u.id INNER JOIN produtos p ON c.id_produto = p.id WHERE c.id_usuario = ?";

  conexao.query(sql, [id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao buscar Compras", erro: erro.message });
    }

    res.json(resultado);
  });

//ALTERAÇÃO(STATUS)
  app.put("/compras/:id_compra", (req, res) => {
    const id_compra = req.params.id_compra; 
    const { novo_status } = req.body;     

    if (!novo_status) {
      return res.status(400).json({ erro: "O novo status é obrigatório." });
    }

    const sql = "UPDATE compras SET status = ? WHERE id_compra = ?";

    
    conexao.query(sql, [novo_status, id_compra], (erro, resultado) => {
      if (erro) {
        return res.status(500).json({
          mensagem: "Erro ao atualizar o status da compra",
          erro: erro.message
        });
      }

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: "Compra não encontrada." });
      }

      res.json({ mensagem: "Status da compra atualizado com sucesso!" });
    });
  });

});


