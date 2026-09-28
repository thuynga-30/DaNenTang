import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  score: number;
  total: number;
};

export default function ScoreKeeper({ score, total }: Props) {
  return (
    <Text style={styles.score}>
      Điểm: {score} / {total}
    </Text>
  );
}

const styles = StyleSheet.create({
  score: {
    fontSize: 18,
    color: '#F1C40F',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});