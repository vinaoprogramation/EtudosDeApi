import React from "react";

import estilos from "./estilos";

import { Text, View, TouchableOpacity } from "react-native";

export default function Administracao({navigation}) {
  return (
    <View>
      <Text style={estilos.texto}>Administração</Text>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Adicionar');
      }}

      style={estilos.botao}
      >

        <Text>Adicionar Produto</Text>
      </TouchableOpacity>


      <TouchableOpacity
      onPress={() => {
        navigation.navigate('StatusCompra');
      }}

      style={estilos.botao}
      >

        <Text>Alterar Status de uma compra</Text>
      </TouchableOpacity>


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