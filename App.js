import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
const [contador,setContador] = useState(0)

const handleIncrement = () => {
  setContador(contador + 1);
};

const handleDecrement = () => {
  contador > 0 && setContador(contador - 1);
};

const handleReset = () => {
  setContador(0);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>𐙚Contador!⋆ ࣪ ˖</Text>
      <Text style={styles.counterText}>{contador}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText} >Diminuir</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text  style={styles.buttonText}>Aumentar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
        <Text style={styles.buttonText} >Zerar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1FF', // Cor de fundo principal
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#D9A299", // Cor do título
  },
  counterText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#DCC5B2", // Cor do contador
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#D9A299", // Cor dos botões
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20, // Botões mais arredondados
  },
  buttonText: {
    color: "#FAF7F3", // Cor do texto dos botões
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10, // Ajuste para espaçamento
    gap: 8,
  },
  resetButton: {
    backgroundColor: "#DCC5B2", // Cor do botão de reset
    marginTop: 10, // Espaçamento acima do botão "Zerar"
  },
});
