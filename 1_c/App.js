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
        

        {/* Tiêu đề "FORGET PASSWORD" */}
        <Text style={styles.title}>CODE</Text>

        {/* Mô tả */}
        <Text style={styles.subtitle2}>
          VERIFICATION
        </Text>
        <Text style={styles.subtitle}>
          Enter ontime password sent on           ++849092605798
        </Text>
        <View style={styles.row}>   

        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}   
 />
      </View>
        {/* Nút  */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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

  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 120,
    top: -80,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
  },
    subtitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    top: -80,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#fdd835',
    paddingVertical: 20,
    paddingHorizontal: 134,
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,

  },
});
