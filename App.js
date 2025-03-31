import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ฟังก์ชันสำหรับการล็อคอิน
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }
    
    // ที่นี่คุณสามารถใส่โลจิกการยืนยันตัวตน (เช่น การเรียก API)

    // หากล็อคอินสำเร็จ:
    Alert.alert('Success', 'เข้าสู่ระบบสำเร็จ');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commuhub</Text>
      
      <TextInput
        style={styles.input}
        placeholder="อีเมล"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="รหัสผ่าน"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>ลืมรหัสผ่าน?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ล็อคอิน</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.registerText}>
          ยังไม่มีบัญชี? <Text style={styles.registerLink}>สมัครสมาชิก</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  button: {
    backgroundColor: '#4A90E2',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    color: '#4A90E2',
  },
  registerText: {
    marginTop: 20,
    fontSize: 14,
  },
  registerLink: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});

export default App;
