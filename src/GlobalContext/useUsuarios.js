import {create} from "zustand"

import { API } from "../../servidor/api";

const useUsuarios = create((set, get) => ({
    registrado: false,
    logado: false,
    usuario: null,
  criarUsuario: async (nome, email, senha, cidade) =>{
    try {
      const resposta = await fetch(`${API}/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          cidade
        })
      });

      const dados = await resposta.json();
      console.log(dados);
      return dados, set ({registrado:true});
    } catch (erro) {
      console.log("Erro ao criar usuário:", erro);
    }
    set ({registrado:false});
  },


  fazerLogin: async (email, senha) => {
    try {
      const resposta = await fetch(`${API}/usuarios/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

       
    if (!resposta.ok) {
        console.log("Erro na requisição. Status retornado:", resposta.status);
      return;
    }

    
    const dados = await resposta.json();
    set({ 
      logado: true,
      usuario: dados.usuario
     });
      
    } catch (erro) {
      console.log("Erro ao logar:", erro);
    }
  },
}
)
);

export default useUsuarios;