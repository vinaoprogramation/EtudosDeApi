import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    texto:{
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      marginTop: 20
    },
    botao:{
      backgroundColor: "#86e7b7",
      marginHorizontal: 'auto',
      elevation: 5,
      borderRadius: 5,
      width: '70%',
      marginVertical: 5,
      textAlign: 'center',
      paddingHorizontal: 10,
      paddingVertical: 30
    },
    input:{
      backgroundColor: 'rgb(211, 255, 219)',
      marginBottom: 15,
      width: '95%',
      marginHorizontal: 'auto',
      borderRadius: 5,
      height: 50,
      fontSize: 17,
      borderWidth: 0.1,
      borderColor: 'white',
      
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
      marginVertical: 10
    },
    imagem:{
      width: 400,
      height: 400,
      marginLeft: -20,
      marginTop: -50
    },
    fundo:{
      backgroundColor: '#00bf63',
      flex: 1
    },
    textoBotao:{
      textAlign: 'center',
      fontWeight: 'bold',
    }
});

export default estilos;