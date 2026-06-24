import React from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";

import estilos from "./estilos";

export default function DetalhesCompras({ navigation, route }) {
  const item = route.params

  return (
    <View>
      <Text style={estilos.titulo}>Detalhes da Compra</Text>

      <View style={estilos.detalhes}>
        <Image source={{ uri: item.imagem }}
          style={estilos.imagem}
        />
        <Text style={estilos.texto}>{item.nome}</Text>
        <Text style={estilos.texto}>{item.descricao}</Text>
        <Text style={estilos.texto}>Status da entrega: {item.status}</Text>
        
      </View>


      <TouchableOpacity
        onPress={() => { navigation.goBack(); }}
        style={estilos.botao}
      >

      <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
};