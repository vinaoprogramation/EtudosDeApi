import react from "react";

import { View, Text, TouchableOpacity } from "react-native";

import estilos from "./estilos";

import useUsuarios from "../../useUsuarios";

export default function Perfil({navigation}){
  const usuario = useUsuarios((state) => (state.usuario))
  const nome = usuario.nome
  const email = usuario.email
  const cidade = usuario.cidade
  const id = usuario.id
  return(
    <View>
    <Text style={estilos.texto}>Perfil</Text>

    <View style={estilos.informacoes}>
      <Text style={estilos.informacoesTexto}>Bem vindo {nome}</Text>
      <Text style={estilos.informacoesTexto}>email: {email}</Text>
      <Text style={estilos.informacoesTexto}>Cidade: {cidade}</Text>
      <Text style={estilos.informacoesTexto}>Id: {id}</Text>
    </View>


      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}

        style={estilos.botao}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
    
  )
};