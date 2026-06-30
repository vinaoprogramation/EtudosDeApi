import React, { useState, useEffect } from 'react';
import estilos from './estilos';
import { Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import useCompras from '../../useCompras';
import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import logo from '../../../../assets/logo.png';

export default function Produtos({ navigation }) {
  const carregarProdutos = useCompras((state) => state.carregarProdutos);
  const produtos = useCompras((state) => state.produtos);
  
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    carregarProdutos();
  }, []);

  const topo = () => {
    return (
      <>
        <View style={estilos.topo}>
          <Image source={logo} style={{ width: 150, height: 150 }} />
          <Text style={[estilos.texto, { fontFamily: 'Inter_600SemiBold' }]}>Nossos Livros</Text>
        </View>
      </>
    );
  };

  const rodape = () => {
    return (
      <TouchableOpacity 
        onPress={() => { navigation.goBack(); }} 
        style={estilos.botao}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    );
  };

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={estilos.fundo}>
        <FlatList 
          style={estilos.listaProdutos} 
          data={produtos} 
          keyExtractor={(item) => item.id.toString()} 
          numColumns={2} // <--- ADICIONE ESTA PROPRIEDADE AQUI
          renderItem={({ item }) => (
            <View style={estilos.produtos}> 
              <TouchableOpacity 
                onPress={() => { navigation.navigate('DetalhesProdutos', item); }} 
                style={estilos.produto} 
              >
                <View style={estilos.divImagem}> 
                  <Image source={{ uri: item.imagem }} style={estilos.imagem} />
                </View>
                <View style={estilos.grupoDetalhes}> 
                  <Text style={[estilos.detalhes, { fontFamily: 'Inter_500Medium' }]}>{item.nome}</Text>
                  <Text style={[estilos.detalhes, { fontFamily: 'Inter_500Medium' }]}>{item.valor}R$</Text>
                </View>
              </TouchableOpacity>
            </View>
          )} 
          ListHeaderComponent={topo} 
          ListFooterComponent={rodape} 
        />
      </View>
    );
  }
}
