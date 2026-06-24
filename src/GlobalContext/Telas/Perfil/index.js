import react from "react";

import { View, Text, TouchableOpacity } from "react-native";

import estilos from "./estilos";

import useUsuarios from "../../useUsuarios";

export default function Perfil({ navigation }) {
  const usuario = useUsuarios((state) => (state.usuario))
  const nome = usuario.nome
  const email = usuario.email
  const cidade = usuario.cidade
  const id = usuario.id
  return (
    <View style={estilos.fundo}>

      <View>
        <Text style={estilos.saudacao}>Bem vindo!</Text>
        <Text style={estilos.nome}>{nome}</Text>

        <View>
          <Text style={estilos.informacoesPessoais}>Informações Pessoais</Text>
          <Text style={estilos.informacoesTexto}>Email</Text>
          <Text style={estilos.informacoes}>{email}</Text>

        </View>
        <Text style={estilos.informacoesTexto}>Cidade:</Text>
        <Text style={estilos.informacoes}>{cidade}</Text>
      </View>


      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>VOLTAR</Text>
      </TouchableOpacity>
    </View>

  )
};