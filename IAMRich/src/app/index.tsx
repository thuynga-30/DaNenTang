import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={{ uri: 'https://helia.com.vn/wp-content/uploads/2024/08/Kim-cuong-nhan-tao.jpg' }}
        style={styles.diamondImage}
      />
      <Text style={styles.title}>I Am Rich</Text>
      <Text style={styles.subtitle}>
        Chúc mừng bạn là người có đẳng cấp và gu thẩm mỹ.{'\n'}
        Ứng dụng này xác nhận rằng bạn giàu có!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A23',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  diamondImage: {
    width: 200,
    height: 200,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
});