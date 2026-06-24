import React,{useState, useEffect} from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import estilos from "./estilos";
import useUsuarios from "../../useUsuarios";
import logo from "../../../../assets/logo.png"


export default function Registro({navigation}){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cidade, setCidade] = useState("");

  const criarUsuario = useUsuarios((state) => state.criarUsuario)
  const fazerLogin = useUsuarios((state) => state.fazerLogin)
  const registrado = useUsuarios((state) => state.registrado)
  const logado = useUsuarios((state) => state.logado)

  

  useEffect(() => {
    if(registrado){
      fazerLogin(email, senha)
    }
  }, [registrado])

  useEffect(() => {
    if(logado){
      navigation.navigate('Principal')
    }
  }, [logado])
  return(


    <View style={estilos.fundo}>
      <Image
      source={logo}
      style={estilos.imagem}
      />

      <TextInput
        placeholder="Exemplo da Silva"
        value={nome}
        onChangeText={setNome}
        style={estilos.input}
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

      <TextInput
        placeholder="São Exemplo"
        value={cidade}
        onChangeText={setCidade}
        style={estilos.input}
      />

      
      <TouchableOpacity
        onPress={() => {
          criarUsuario(nome, email, senha, cidade)
          console.log('Botao')
        }}

        style={estilos.botao}
      >
        <Text style={estilos.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  )
};