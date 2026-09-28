import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Index() {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(60); // kg
  const [showResult, setShowResult] = useState(false);

  function calculateBMI() {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }

  function getBMIResultText(bmi: number) {
    if (bmi < 18.5) return 'Bạn hơi gầy, nên bổ sung thêm dinh dưỡng.';
    if (bmi < 25) return 'Cân nặng của bạn đang ở mức bình thường. Tốt lắm!';
    if (bmi < 30) return 'Bạn hơi thừa cân, nên chú ý chế độ ăn.';
    return 'Bạn đang thừa cân khá nhiều, nên tham khảo ý kiến bác sĩ.';
  }

  if (showResult) {
    const bmi = parseFloat(calculateBMI());
    return (
      <View style={styles.resultContainer}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.resultTitle}>CHỈ SỐ BMI CỦA BẠN LÀ</Text>
        <Text style={styles.bmiValue}>{bmi}</Text>
        <Text style={styles.resultAdvice}>{getBMIResultText(bmi)}</Text>

        <TouchableOpacity style={styles.recalculateButton} onPress={() => setShowResult(false)}>
          <Text style={styles.recalculateText}>TÍNH LẠI</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>BMI CALCULATOR</Text>

      {/* Chọn giới tính */}
      <View style={styles.genderRow}>
        <TouchableOpacity
          style={[styles.genderCard, gender === 'male' && styles.genderCardSelected]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderText}>♂ NAM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.genderCard, gender === 'female' && styles.genderCardSelected]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderText}>♀ NỮ</Text>
        </TouchableOpacity>
      </View>

      {/* Chiều cao - dùng Slider */}
      <View style={styles.card}>
        <Text style={styles.label}>CHIỀU CAO</Text>
        <Text style={styles.valueText}>{height} cm</Text>
        <Slider
          style={styles.slider}
          minimumValue={100}
          maximumValue={220}
          step={1}
          value={height}
          onValueChange={(value) => setHeight(value)}
          minimumTrackTintColor="#00C2CB"
          maximumTrackTintColor="#3A3A4E"
          thumbTintColor="#00C2CB"
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>CÂN NẶNG</Text>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={weight.toString()}
            onChangeText={(text) => {
              if (text === '') {
                setWeight(0);
                return;
              }

              const value = Number(text);
              if (!isNaN(value)) {
                setWeight(value);
              }
            }}
            keyboardType="decimal-pad"
            placeholder="Nhập"
            placeholderTextColor="#8A8AA3"
          />

          <Text style={styles.unit}>kg</Text>
        </View>
      </View>
      {/* Nút tính toán */}
      <TouchableOpacity
        style={styles.calculateButton}
        onPress={() => setShowResult(true)}
        disabled={!gender}
      >
        <Text style={styles.calculateText}>TÍNH TOÁN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  genderCard: {
    flex: 1,
    backgroundColor: '#1C1C2E',
    paddingVertical: 30,
    borderRadius: 12,
    marginHorizontal: 6,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  genderCardSelected: {
    borderColor: '#00C2CB',
  },
  genderText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#1C1C2E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  label: {
    color: '#8A8AA3',
    fontSize: 14,
    marginBottom: 8,
    letterSpacing: 1,
  },
  valueText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 10,
  },
  calculateButton: {
    backgroundColor: '#00C2CB',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  calculateText: {
    color: '#0D0D1A',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#00C2CB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  resultTitle: {
    color: '#0D0D1A',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 2,
    marginBottom: 10,
  },
  bmiValue: {
    color: '#0D0D1A',
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultAdvice: {
    color: '#0D0D1A',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  recalculateButton: {
    backgroundColor: '#0D0D1A',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
  },
  recalculateText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  input: {
    width: 120,
    height: 60,
    backgroundColor: '#0D0D1A',
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00C2CB',
    padding: 0,
  },

  unit: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});