import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    texto:{
      fontSize: 25,
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
      marginBottom: 20

    },
    imagem:{
      width: 80,
      height: 80,
    },
    compras:{
      backgroundColor: "#ffffff",
      paddingHorizontal: 10,
      paddingVertical: 10,
      width: '95%',
      marginHorizontal: 'auto',
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 10,
      elevation: 5,
      borderRadius: 5,
      justifyContent: "flex-start",
      gap: 5
    },
    informacoes:{
    },
    informacoesTexto:{
      fontSize: 17,
      fontWeight: 'condensedBold',

    },
    listaProdutos:{
      marginBottom: 200
    }


});

export default estilos;