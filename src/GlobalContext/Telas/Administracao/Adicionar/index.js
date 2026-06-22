import React, { useState, useEffect } from "react";

import estilos from "./estilos";

import { Text, View, TouchableOpacity, TextInput, Button } from "react-native";

import useCompras from "../../../useCompras";

import * as ImagePicker from 'expo-image-picker';


export default function Adicionar({ navigation }) {
  const criarProduto = useCompras((state) => (state.criarProduto))

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cor, setCor] = useState("");


  const [imagem, setImagem] = useState(null);

  const pegarImagem = async () => {
    // Solicita permissão para acessar a galeria (necessário no iOS)
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissao.granted === false) {
      alert('É necessário permitir o acesso à galeria!');
      return;
    }

    // Abre a galeria de imagens
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // Restringe apenas para imagens
      allowsEditing: true,    // Permite que o usuário corte/ajuste a imagem
      aspect: [4, 3],         // Proporção de corte
      quality: 1,             // Qualidade da imagem (de 0 a 1)
    });

    // Se o usuário selecionou uma imagem, atualiza o estado
    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  return (


    <View>
      <Text style={estilos.texto}>Adicionar Produto</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={estilos.input}
      />

      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        style={estilos.input}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={estilos.input}
      />


      <TextInput
        placeholder="Cor"
        value={cor}
        onChangeText={setCor}
        style={estilos.input}
      />

      <Button title="Selecionar imagem da Galeria" onPress={pegarImagem} />




      <TouchableOpacity
        onPress={() => {
          criarProduto(nome, valor, descricao, imagem, cor)
          console.log('Botao')
          navigation.navigate('Compras')
        }}

        style={estilos.botao}
      >
        <Text>Adicionar Produto à Compras</Text>
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