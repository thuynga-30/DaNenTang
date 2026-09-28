import { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const diceImages = [
  require("../images/dice1.png") , 
  require("../images/dice2.png"), 
  require("../images/dice3.png"),
  require("../images/dice4.png"), 
  require("../images/dice5.png"),
  require("../images/dice6.png"), 
];

export default function Index() {
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(1);

  function rollDice() {
    setDiceOne(Math.floor(Math.random() * 6));
    setDiceTwo(Math.floor(Math.random() * 6));
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.diceContainer}>
        <Image source={diceImages[diceOne]} style={styles.diceImage} />
        <Image source={diceImages[diceTwo]} style={styles.diceImage} />
      </View>

      <TouchableOpacity style={styles.rollButton} onPress={rollDice}>
        <Text style={styles.rollButtonText}>Roll</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginHorizontal: 15,
    resizeMode: 'contain',
  },
  rollButton: {
    backgroundColor: '#5D3FD3',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  rollButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});