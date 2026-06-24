import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    texto:{
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      marginTop: 20
    },
    botao:{
      padding: 10,
      backgroundColor: "#bebebe",
      marginHorizontal: 'auto',
      elevation: 5,
      borderRadius: 5,
      width: '70%',
      marginVertical: 5
    },
    input:{
      backgroundColor: '#ff7070',
      borderWidth: 0.5,
      marginVertical: 3,
      width: '80%',
      marginHorizontal: 'auto',
      borderRadius: 5,
      elevation: 2,
      
    },
    informacoes:{
      backgroundColor: "#ffabab",
      width: '98%',
      marginHorizontal: 'auto',
      justifyContent: 'center',
      alignItens: 'middle'
    },
    informacoesTexto:{
      fontSize: 20,
      textAlign: 'left',
      marginLeft: 30,
      marginVertical: 5
    }
});

export default estilos;