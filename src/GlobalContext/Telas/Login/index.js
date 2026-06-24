import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import estilos from "./estilos";
import useUsuarios from "../../useUsuarios";

import logo from "../../../../assets/logo.png"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = useUsuarios((state) => state.fazerLogin)
  const logado = useUsuarios((state) => state.logado)




  useEffect(() => {
    if (logado) {
      navigation.navigate('Principal')
    }
  }, [logado])

  return (
    <View style={estilos.fundo}>
      <Text></Text>
      <Image
        source={logo}
        style={estilos.imagem}
      />

      <TextInput
        placeholder="exemplo@gmail.com"
        value={email}
        onChangeText={setEmail}
        style={estilos.input}
      />

      <TextInput
        placeholder="senhaExemplo@123"
        value={senha}
        onChangeText={setSenha}
        style={estilos.input}
      />

      <TouchableOpacity
        onPress={() => {
          fazerLogin(email, senha)
          console.log('Botao')
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>FAÇA LOGIN</Text>
      </TouchableOpacity>

      <Text style={estilos.ou}>OU</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Registro')
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>REGISTRE-SE</Text>
      </TouchableOpacity>
    </View>
  )
};