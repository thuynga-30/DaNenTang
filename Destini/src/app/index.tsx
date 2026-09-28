import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { storyNodes } from '../components/storyBrain';

export default function Index() {
  const [currentNodeId, setCurrentNodeId] = useState(0);

  const currentNode = storyNodes.find((node) => node.id === currentNodeId)!;

  function handleChoice(nextId: number) {
    setCurrentNodeId(nextId);
  }

  function restartStory() {
    setCurrentNodeId(0);
  }

  // Xác định màu nền/nút dựa theo trạng thái thắng/thua
  const isEnding = currentNode.isEnding;
  const isWin = currentNode.isWin;

  const backgroundColor = !isEnding
    ? '#2C2A4A' 
    : isWin
    ? '#1E5631' 
    : '#5C1A1A';

  const buttonColor = isWin ? '#4CAF50' : '#E74C3C';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="light-content" />

      {/* Ảnh minh họa cho node hiện tại */}
      <Image source={currentNode.image} style={styles.storyImage} />

      <Text style={styles.storyText}>{currentNode.text}</Text>

      {!isEnding ? (
        <View>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleChoice(currentNode.next1)}
          >
            <Text style={styles.choiceText}>{currentNode.choice1}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleChoice(currentNode.next2)}
          >
            <Text style={styles.choiceText}>{currentNode.choice2}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {/* Nhãn Thắng/Thua rõ ràng */}
          <Text style={styles.resultLabel}>
            {isWin ? '🏆 CHIẾN THẮNG!' : '💀 THẤT BẠI'}
          </Text>

          <TouchableOpacity
            style={[styles.restartButton, { backgroundColor: buttonColor }]}
            onPress={restartStory}
          >
            <Text style={styles.restartText}>Chơi lại từ đầu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  storyImage: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  storyText: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 30,
    textAlign: 'center',
  },
  choiceButton: {
    backgroundColor: '#907AD6',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 14,
  },
  choiceText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  resultLabel: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  restartButton: {
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  restartText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});