import {create} from "zustand"

import { API } from "../../servidor/api";

const useCompras = create((set, get) => ({
    produtos:[],
    compras:[],

    //FUNÇÕES RELACIONADAS A PRODUTOS

    criarProduto: async (nome, valor, descricao, imagem, cor) =>{
    try {
      const resposta = await fetch(`${API}/produtos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          valor,
          descricao,
          imagem,
          cor,
        })
      });

      const dados = await resposta.json();
      console.log(dados);
      return dados;
    } catch (erro) {
      console.log("Erro ao criar produto:", erro);
    }
  },

    carregarProdutos: async () =>{
    try {
      const resposta = await fetch(`${API}/produtos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const dados = await resposta.json();
      
      console.log(dados);
      return dados, set ({produtos:dados});
    } catch (erro) {
      console.log("Erro ao carregar produtos:", erro);
    }
    
  },


  //FUNÇÕES RELACIONADAS A COMPRAS

  realizaCompra: async (id_usuario, id_produto) =>{
    try {
      const resposta = await fetch(`${API}/compras`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id_usuario,
          id_produto
        })
      });

      const dados = await resposta.json();
      console.log(dados);
      return dados;
    } catch (erro) {
      console.log("Erro ao realizar compra:", erro);
    }
  },

  carregarCompras: async (id_usuario) =>{
    try {
      const resposta = await fetch(`${API}/compras/${id_usuario}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const dados = await resposta.json();
      
      console.log(dados);
      return dados, set ({compras:dados});
    } catch (erro) {
      console.log("Erro ao carregar compras:", erro);
    }
    
  },


}
)
);

export default useCompras;