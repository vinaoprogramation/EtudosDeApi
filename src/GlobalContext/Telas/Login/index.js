import React,{useState, useEffect} from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import estilos from "./estilos";
import useUsuarios from "../../useUsuarios";

export default function Login({navigation}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = useUsuarios((state) => state.fazerLogin)
  const logado = useUsuarios((state) => state.logado)



  useEffect(() => {
    if(logado){
      navigation.navigate('Principal')
    }
  }, [logado])

  return(
    <View>
      <Text style={estilos.texto}>Login</Text>

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



      <TouchableOpacity
        onPress={() => {
          fazerLogin(email, senha)
          console.log('Botao')
        }}

        style={estilos.botao}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Registro')
        }}

        style={estilos.botao}
      >
        <Text>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  )
};