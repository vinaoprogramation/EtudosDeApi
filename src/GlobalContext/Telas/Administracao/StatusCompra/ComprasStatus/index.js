import React,{useState, useEffect} from "react";

import { Text, View, TouchableOpacity, TextInput } from "react-native";

import estilos from "./estilos";

import useCompras from "../../../../useCompras";

export default function ComprasStatus({navigation, route}){
  const atualizaStatusCompra = useCompras((state) => state.atualizaStatusCompra) 
  const item = route.params
  const id = item.id_compra

  const [status, setStatus] = useState("");
  


  return(
    <View>
      <Text style={estilos.texto}>StatusCompra</Text>


      <TextInput
        placeholder="Novo Status"
        value={status}
        onChangeText={setStatus}
        style={estilos.input}
      />



      <TouchableOpacity
        onPress={() => {
          atualizaStatusCompra( id, status)
          console.log('Botao')
        }}

        style={estilos.botao}
      >
        <Text>Alterar Status</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => { navigation.goBack(); }}
        style={estilos.botao}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
      
    </View>
  )
}