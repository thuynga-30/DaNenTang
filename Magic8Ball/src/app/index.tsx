import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

const ballImages = [
  require("../images/ball1.png") , 
  require("../images/ball2.png"), 
  require("../images/ball3.png"),
  require("../images/ball4.png"), 
  require("../images/ball5.png"),
];

export default function Index() {
  const [ballNumber, setBallNumber] = useState(0);

  function askQuestion() {
    setBallNumber(Math.floor(Math.random() * 8));
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>Hãy đặt câu hỏi và chạm vào quả cầu 🔮</Text>

      <TouchableOpacity onPress={askQuestion}>
        <Image source={ballImages[ballNumber]} style={styles.ballImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B2F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  ballImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});