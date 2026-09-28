import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Avatar */}
      <Image
        source={require("../../assets/images/4185.jpg")}
        style={styles.avatar}
      />

      {/* Tên và chức danh */}
      <Text style={styles.name}>Lê Thị Thúy Nga</Text>
      <Text style={styles.title}>REACT NATIVE DEVELOPER</Text>

      <View style={styles.divider} />

      {/* Thông tin liên hệ */}
      <View style={styles.infoRow}>
        <MaterialIcons name="phone" size={26} color="#2C3E50" style={styles.icon} />
        <Text style={styles.infoText}>0823702257</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="email" size={26} color="#2C3E50" style={styles.icon} />
        <Text style={styles.infoText}>ngaltt.23it@vku.udn.vn</Text>
      </View>

      <View style={styles.infoRow}>
        <Entypo medium="school" size={26} color="#2C3E50" style={styles.icon} />
        <Text style={styles.infoText}>Vietnam-Korea University</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F3B4D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    letterSpacing: 2,
    color: '#7FB3D5',
    marginBottom: 20,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#7FB3D5',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '85%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  icon: {
    marginRight: 14,
  },
  infoText: {
    fontSize: 16,
    color: '#2C3E50',
  },
});