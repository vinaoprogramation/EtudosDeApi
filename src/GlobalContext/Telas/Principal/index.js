import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estilos from "./estilos";

export default function Principal({ navigation }) {
  return (
    <View>
      <Text style={estilos.texto}>Tela Inicial</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login')
        }}

        style={estilos.botao}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Perfil')
        }}

        style={estilos.botao}
      >
        <Text>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Produtos')
        }}

        style={estilos.botao}
      >
        <Text>Produtos</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Administracao')
        }}

        style={estilos.botao}
      >
        <Text>Administração</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Compras')
        }}
        style={estilos.botao}
      >
        <Text>Minhas Compras</Text>

      </TouchableOpacity>

    </View>
  )
};