import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estilos from "./estilos";
import useUsuarios from "../../useUsuarios";
export default function Principal({ navigation }) {
  const sair = useUsuarios((state) => state.sair)

  return (
    <View style={estilos.fundo}>
      <Text style={estilos.texto}>Tela Inicial</Text>



      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Perfil')
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>PERFIL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Produtos')
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>PRODUTOS</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Administracao')
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>ADMINISTRAÇÃO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Compras')
        }}
        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>MINHAS COMPRAS</Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          sair()
          navigation.navigate('Login')

        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>SAIR</Text>
      </TouchableOpacity>


    </View>
  )
};