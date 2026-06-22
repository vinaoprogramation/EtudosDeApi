import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import estilos from "./estilos";
import useCompras from "../../useCompras";
import useUsuarios from "../../useUsuarios";

export default function Compras({ navigation }) {
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

  const renderItem = ({ item }) => {
    return (
      <View style={estilos.produtos}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('DetalhesCompras', item); }}
        >
          <Text>{item.nome}</Text>
          <Text>{item.valor}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (!compras || compras.length === 0) {
    return (
      <View style={estilos.containerVazio}>
        
        <Text style={estilos.texto}>Você não tem compras no momento</Text>
        {topo()}
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Teste</Text>
      <FlatList
        style={estilos.listaProdutos}
        data={compras}
        keyExtractor={(item) => item.id_compra.toString()}
        renderItem={renderItem}
        ListHeaderComponent={topo}
      />
    </View>
  );
}
