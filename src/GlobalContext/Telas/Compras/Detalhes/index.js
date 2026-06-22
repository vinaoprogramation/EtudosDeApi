import React,{useState, useEffect} from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";

import estilos from "./estilos";

import useCompras from "../../../useCompras";
import useUsuarios from "../../../useUsuarios";

import CompraRealizada from "../../Componentes Estáticos/CompraRealizada";

export default function DetalhesCompras({ navigation, route }) {
  const item = route.params
  const usuario = useUsuarios((state) => state.usuario)
  const realizaCompra = useCompras((state) => state.realizaCompra)

    const [compraFeita, setCompraFeita] = useState(false);
    

  return (
    <View>
      <Text style={estilos.texto}> Detalhes </Text>

      <View style={estilos.produtos}>
        <Image source={{ uri: item.imagem }} style={estilos.imagem} />
        <Text style={estilos.informacoesTexto}>{item.nome}</Text>
        <Text style={estilos.informacoesTexto}>Valor: {item.valor},00R$</Text>
        <Text style={estilos.informacoesTexto}>Cor: {item.cor}</Text>
        <Text style={estilos.informacoesTexto}>Descrição: {item.descricao}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          realizaCompra(usuario.id, item.id)
          setCompraFeita(true); 
        }}

        style={estilos.botao}
      >

        <Text>Comprar</Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}

        style={estilos.botao}
      >

        <Text>Voltar</Text>

      </TouchableOpacity>
      

      <CompraRealizada visivel={compraFeita} setVisivel={setCompraFeita} />
    </View>

  )
};
