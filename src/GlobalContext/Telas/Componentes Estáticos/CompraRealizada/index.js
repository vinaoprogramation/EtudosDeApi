import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import estilos from './estilos'; // Mantém seus estilos originais de cor/texto

export default function CompraRealizada({ visivel, setVisivel }) {
  // 1. Cria uma referência para o valor da opacidade (começa em 0 - invisível)
  const opacidade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visivel) {
      // Animação de Entrada (Fade-in)
      Animated.timing(opacidade, {
        toValue: 1,         // Fica totalmente visível
        duration: 400,      // Tempo da transição em milissegundos
        useNativeDriver: true,
      }).start(() => {
        // Espera 3 segundos visível e inicia a saída
        setTimeout(() => {
          // Animação de Saída (Fade-out)
          Animated.timing(opacidade, {
            toValue: 0,     // Volta a ficar invisível
            duration: 400,  // Tempo da transição de sumiço
            useNativeDriver: true,
          }).start(() => {
            setVisivel(false); // Só desmonta o componente após a animação acabar
          });
        }, 3000);
      });
    }
  }, [visivel, setVisivel, opacidade]);

  if (!visivel) return null;

  return (
    // 2. Trocamos a View comum por uma Animated.View
    <Animated.View style={[estilos.fundo, styles.overlay, { opacity: opacidade }]}>
      <Text style={estilos.texto}>Compra realizada com Sucesso!</Text>
    </Animated.View>
  );
}

// 3. Estilos extras necessários para garantir que ele fique flutuando na tela
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
