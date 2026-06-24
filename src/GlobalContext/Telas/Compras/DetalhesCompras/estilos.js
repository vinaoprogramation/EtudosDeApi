import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    texto:{
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      marginTop: 5,
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
    input:{
      backgroundColor: '#ff7070',
      borderWidth: 0.5,
      marginVertical: 3,
      width: '80%',
      marginHorizontal: 'auto',
      borderRadius: 5,
      elevation: 2,
      
    },
    imagem:{
      width: 200,
      height: 200,
      margin: 'auto',
    },
    detalhes:{
      width: '90%',
      marginHorizontal: 'auto'
    },
    titulo:{
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      marginTop: 20,
    },


});

export default estilos;