import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { questions } from '../components/QuizBrain';
import QuestionCard from '../components/QuestionCard';
import ScoreKeeper from '../components/ScoreKeeper';

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function checkAnswer(userPickedTrue: boolean) {
    const correctAnswer = questions[questionIndex].answer;
    if (userPickedTrue === correctAnswer) {
      setScore(score + 1);
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setScore(0);
    setFinished(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScoreKeeper score={score} total={questions.length} />

      {!finished ? (
        <>
          <QuestionCard questionText={questions[questionIndex].text} />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.trueButton]}
              onPress={() => checkAnswer(true)}
            >
              <Text style={styles.buttonText}>True</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.falseButton]}
              onPress={() => checkAnswer(false)}
            >
              <Text style={styles.buttonText}>False</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          <Text style={styles.resultText}>
            Hoàn thành! Kết quả cuối: {score}/{questions.length}
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Làm lại</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B2F',
    justifyContent: 'center',
    padding: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 10,
    marginHorizontal: 6,
    alignItems: 'center',
  },
  trueButton: {
    backgroundColor: '#27AE60',
  },
  falseButton: {
    backgroundColor: '#E74C3C',
  },
  resultText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#2980B9',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});