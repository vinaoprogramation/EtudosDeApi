import React, { useState, useEffect } from "react";

import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";

import estilos from "./estilos";

import useCompras from "../../../useCompras";
import useUsuarios from "../../../useUsuarios";

export default function StatusCompra({ navigation }) {
  const compras = useCompras((state) => state.compras);
  const carregarCompras = useCompras((state) => state.carregarCompras);
  const usuario = useUsuarios((state) => (state.usuario))
  const id = usuario.id

  useEffect(() => {
    carregarCompras(id);
  }, []);

  const topo = () => {
    return (
      <TouchableOpacity
        onPress={() => { navigation.goBack(); }}
        style={estilos.botao}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    );
  };

  if (compras.length === 0) {
    return (
      <View>
        <Text style={estilos.texto}>Nada Patrão</Text>
        <TouchableOpacity
          onPress={() => { navigation.goBack(); }}
          style={estilos.botao}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else {
    return (
      <View style={estilos.container}>
        <Text style={estilos.texto}>Teste</Text>
        <FlatList
          style={estilos.listaProdutos}
          data={compras}
          keyExtractor={(item) => item.id_compra.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => { navigation.navigate('ComprasStatus', item); }}
                style={estilos.compras}
              >
                <View>
                  <Image source={{ uri: item.imagem }} style={estilos.imagem} />
                </View>

                <View style={estilos.informacoes}>
                  <Text style={estilos.informacoesTexto}>{item.nome}</Text>
                  <Text style={estilos.informacoesTexto}>R${item.valor}</Text>
                </View>

              </TouchableOpacity>
            </View>
          )
          }

          ListHeaderComponent={topo}
        />
      </View>
    );
  }

}
