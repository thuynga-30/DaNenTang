import React from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';
import { Audio } from 'expo-av';

const keys = [
  { color: '#FF6B6B', sound: require("../sounds/note1.wav") },
  { color: '#FFA36B', sound: require("../sounds/note2.wav") },
  { color: '#FFD56B', sound: require("../sounds/note3.wav") },
  { color: '#8BE58B', sound: require("../sounds/note4.wav") },
  { color: '#6BCBFF', sound: require("../sounds/note5.wav") },
  { color: '#6B8CFF', sound: require("../sounds/note6.wav") },
  { color: '#B06BFF', sound: require("../sounds/note7.wav") },
];

export default function Index() {
  async function playSound(soundFile: any) {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {keys.map((key, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.key, { backgroundColor: key.color }]}
          onPress={() => playSound(key.sound)}
          activeOpacity={0.6}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  key: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
});