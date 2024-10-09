import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thư viện icon

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Hình con mắt phía trên */}
      <Image
        source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ce9436cca4aee2817605e28a0e8f371c' }} // URL hình con mắt
        style={styles.eyeImage}
      />

      {/* Ô nhập tên với icon người */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="blue" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Please input user name"
          placeholderTextColor="gray"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Ô nhập mật khẩu với icon ổ khóa */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="blue" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Please input password"
          placeholderTextColor="gray"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Nút LOGIN */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Đăng ký và quên mật khẩu */}
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Phương thức đăng nhập khác */}
      <Text style={styles.otherMethodsText}>Other Login Methods</Text>
      <View style={styles.otherMethodsContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/color/452/add-user-male.png' }} // Icon đăng ký
            style={styles.otherMethodIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/color/452/wifi.png' }} // Icon wifi
            style={styles.otherMethodIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/color/452/facebook-new.png' }} // Icon Facebook
            style={styles.otherMethodIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  eyeImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    width: '80%',
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  icon: {
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#1E90FF', // Màu xanh cho nút đăng nhập
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  linkText: {
    color: 'black',
    fontSize: 14,
  },
  otherMethodsText: {
    color: 'gray',
    marginVertical: 20,
  },
  otherMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  otherMethodIcon: {
    width: 50,
    height: 50,
  },
});
