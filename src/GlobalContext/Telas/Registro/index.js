import React,{useState, useEffect} from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import estilos from "./estilos";
import useUsuarios from "../../useUsuarios";


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


    <View>
      <Text style={estilos.texto}>Registrar</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={estilos.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={estilos.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={estilos.input}
      />

      <TextInput
        placeholder="Cidade"
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
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
};