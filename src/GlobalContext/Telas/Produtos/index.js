import React, { useState, useEffect } from "react";

import estilos from "./estilos";

import { Text, View, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";

import useCompras from "../../useCompras";

export default function Produtos({ navigation }) {
  const carregarProdutos = useCompras((state) => (state.carregarProdutos))
  const produtos = useCompras((state) => state.produtos)

  useEffect(() => {
    carregarProdutos();
  }, [])

  const topo = () => {
    return (
      <Text style={estilos.texto}>Teste Compras</Text>
    )

  }

  const rodape = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}

        style={estilos.botao}
      >

        <Text>Voltar</Text>

      </TouchableOpacity>
    )
  }


  return (
    <View style={estilos.fundo}>





      <FlatList
        style={estilos.listaProdutos}
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View style={estilos.produtos}>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetalhesProdutos', item)
            }}
            >
              <Image source={{ uri: item.imagem }}
                style={estilos.imagem}
              />

              <Text>{item.nome}</Text>
              <Text>{item.valor}</Text>

            </TouchableOpacity>

            

          </View>


        )}




        ListHeaderComponent={topo}

        ListFooterComponent={rodape}
      />




    </View>
  )
};
