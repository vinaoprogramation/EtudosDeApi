import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 20
  },
  botao: {
    padding: 10,
    backgroundColor: "#86e7b7",
    marginHorizontal: 'auto',
    elevation: 5,
    borderRadius: 5,
    width: '70%',
    marginVertical: 20,
    textAlign: 'center'
  },
  input: {
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
  informacoes: {
    fontSize: 18,
    color: '#ffffffaf',
    marginLeft: 50,
    backgroundColor: '#ffffff44',
    width: '70%',
    height: 35,
    borderRadius: 5,
    paddingHorizontal: 8,
    verticalAlign: 'bottom',
    paddingBottom: 2

  },
  informacoesTexto: {
    fontSize: 22,
    color: '#ffffff',
    marginLeft: 50,
  },
  imagem: {
    width: 400,
    height: 400,
    marginLeft: -20,
    marginTop: -50
  },
  fundo: {
    backgroundColor: '#00bf63',
    flex: 1
  },
  ou: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  textoBotao: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  saudacao: {
    fontSize: 45,
    fontWeight: 500,
    color: '#ffffff',
    marginTop: 80,
    marginLeft: 20,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {width:0.5, height:0.5},
  },
  nome: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: 900,
    marginLeft: 40
  },
  informacoesPessoais:{
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 500,
    marginVertical: 10,
  }
});

export default estilos;