import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      // Màu sắc gradient theo thứ tự từ trên xuống dưới
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      // Tỉ lệ màu theo ý muốn
      locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
      style={styles.background} // Thêm style cho gradient
    >
      <View style={styles.container}>
        <View style={styles.ellipse} />
        <Text style={styles.title}>GROW YOUR BUSINESS</Text>
        <Text style={styles.subtitle}>We will help you to grow your business using online server</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title2}>HOW WE WORK</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Đảm bảo gradient bao phủ toàn bộ màn hình
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ellipse: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#C7F4F7',
    borderColor: 'black',
    borderWidth: 15,
    position: 'absolute',
    top: 67,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
    position: 'absolute',
    top: 297,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
    position: 'absolute',
    top: 650,
  },
  subtitle: {
    fontSize: 15,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 417,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    position: 'absolute',
    top: 547,
  },
  button: {
    backgroundColor: '#fdd835',
    paddingVertical: 12,
    paddingHorizontal: 30,
   
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
