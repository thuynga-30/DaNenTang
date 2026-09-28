import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as Location from 'expo-location';

const API_KEY = 'b6c04822162d663c4a796b8330596dfa';

interface WeatherData {
  city: string;
  temp: number;
  condition: string;
}

export default function Index() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  async function getWeatherByLocation() {
    setLoading(true);
    setErrorMsg(null);
    try {
      // Xin quyền truy cập vị trí
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Bạn cần cấp quyền vị trí để xem thời tiết khu vực hiện tại.');
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
      await fetchWeather(url);
    } catch (error) {
      setErrorMsg('Không thể lấy vị trí. Vui lòng thử tìm theo tên thành phố.');
      setLoading(false);
    }
  }

  async function getWeatherByCity(city: string) {
    if (!city.trim()) return;
    setLoading(true);
    setErrorMsg(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    await fetchWeather(url);
  }

  async function fetchWeather(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Không tìm thấy thành phố này.');
      }
      const data = await response.json();
      setWeather({
        city: data.name,
        temp: Math.round(data.main.temp),
        condition: data.weather[0].main,
      });
    } catch (error) {
      setErrorMsg('Không tìm thấy dữ liệu thời tiết. Kiểm tra lại tên thành phố hoặc kết nối mạng.');
    } finally {
      setLoading(false);
    }
  }

  // Chọn emoji tương ứng với điều kiện thời tiết
  function getWeatherEmoji(condition: string) {
    switch (condition) {
      case 'Clear': return '☀️';
      case 'Clouds': return '☁️';
      case 'Rain': return '🌧️';
      case 'Thunderstorm': return '⛈️';
      case 'Snow': return '❄️';
      default: return '🌤️';
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Ô tìm kiếm thành phố */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên thành phố..."
          placeholderTextColor="#8A8AA3"
          value={searchCity}
          onChangeText={setSearchCity}
          onSubmitEditing={() => getWeatherByCity(searchCity)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => getWeatherByCity(searchCity)}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationButton} onPress={getWeatherByLocation}>
          <Text style={styles.searchButtonText}>📍</Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung chính: loading / lỗi / kết quả */}
      <View style={styles.resultArea}>
        {loading ? (
          <ActivityIndicator size="large" color="#00C2CB" />
        ) : errorMsg ? (
          <Text style={styles.errorText}>{errorMsg}</Text>
        ) : weather ? (
          <>
            <Text style={styles.emoji}>{getWeatherEmoji(weather.condition)}</Text>
            <Text style={styles.temp}>{weather.temp}°C</Text>
            <Text style={styles.condition}>{weather.condition}</Text>
            <Text style={styles.city}>{weather.city}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
    padding: 20,
    paddingTop: 60,
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    backgroundColor: '#1C1C2E',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: '#00C2CB',
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  locationButton: {
    backgroundColor: '#1C1C2E',
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    fontSize: 20,
  },
  resultArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  temp: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: 'bold',
  },
  condition: {
    color: '#00C2CB',
    fontSize: 22,
    marginTop: 4,
  },
  city: {
    color: '#8A8AA3',
    fontSize: 18,
    marginTop: 8,
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});