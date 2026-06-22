import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    fundo:{
      flex: 1,
      backgroundColor: "#3755ff",
      position: 'absolute',
      width: '90%',
      height: 200,
      marginVertical: 300,
      elevation: 10,
      marginLeft: 18,
      borderRadius: 20
    },
    texto:{
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 'auto',
      color: 'white',
      padding: 10,
      fontWeight: 'bold',
      textDecorationStyle: 'dashed',
      textShadowColor: 'black',
      
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2
    }
    

});

export default estilos;