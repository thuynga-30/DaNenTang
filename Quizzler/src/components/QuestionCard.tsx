import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  questionText: string;
};

export default function QuestionCard({ questionText }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{questionText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C3E50',
    padding: 24,
    borderRadius: 12,
    marginBottom: 30,
    minHeight: 120,
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});