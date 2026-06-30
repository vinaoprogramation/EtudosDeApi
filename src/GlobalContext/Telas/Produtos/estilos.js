import { StyleSheet, Dimensions } from "react-native";

// Pega a largura da tela para ajudar nos cálculos se necessário
const { width } = Dimensions.get('window');

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#00bf63',
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    elevation: 1,
    padding: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    flex: 1, 
  },
  listaProdutos: {
    paddingHorizontal: 8, 
  },
  produtos: {
    flex: 1, 
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    margin: 6, 
    padding: 8,
  },
  produto: {
    width: '100%',
  },
  divImagem: {
    width: '100%',
    height: 110, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 15
  },
  grupoDetalhes: {
    marginTop: 8,
    alignItems: 'center',
  },
  detalhes: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  botao: {
    padding: 12,
    backgroundColor: "#bebebe",
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 5,
    width: '70%',
    marginTop: 20,
    marginBottom: 50,
  },
});

export default estilos;
