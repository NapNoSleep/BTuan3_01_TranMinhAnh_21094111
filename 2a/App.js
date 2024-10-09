import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thêm thư viện vector icons

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>LOGIN</Text>

      {/* Ô nhập tên với icon người */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="black" style={styles.icon} /> {/* Thêm icon người */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="black"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Ô nhập mật khẩu với icon ổ khóa */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.icon} /> {/* Thêm icon ổ khóa */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700', // Màu nền vàng
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFD700',
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
  eyeButton: {
    padding: 5,
  },
  eyeText: {
    fontSize: 18,
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  createAccountText: {
    color: 'black',
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
