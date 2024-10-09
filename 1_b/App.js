import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
        {/* Biểu tượng khóa */}
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6116e09d1d5bc4cef543d23f6e6d8f6d' }} // Link hình khóa
          style={styles.icon}
        />

        {/* Tiêu đề "FORGET PASSWORD" */}
        <Text style={styles.title}>FORGET PASSWORD</Text>

        {/* Mô tả */}
        <Text style={styles.subtitle}>
          Provide your account’s email for which you want to reset your password
        </Text>

        {/* Ô nhập email */}
        <View style={styles.inputContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60543.png' }} // Icon email
            style={styles.emailIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#555"
          />
        </View>

        {/* Nút NEXT */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 105,
    height: 117,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 160,
    paddingVertical: 20,
    marginBottom: 20,
    width: '100%',
  },
  emailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginLeft: -150,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#fdd835',
    paddingVertical: 20,
    paddingHorizontal: 165,
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
