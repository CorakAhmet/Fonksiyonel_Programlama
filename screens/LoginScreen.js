import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const correctEmail = 'beqpan@gmail.com';
    const correctPassword = '1234';

    if (email === correctEmail && password === correctPassword) {
      // Giriş başarılı
      setError('');
      navigation.navigate('Home');
    } else {
      // Hata mesajı göster
      setError('E-posta veya parola yanlış.');
    }
  };

  const navigateToSignUpPage = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/profil.png')} // PNG resminizi buraya ekleyin
          style={styles.logo}
        />
        <View style={styles.overlay} />
      </View>
      <Text style={styles.title}>Giriş Yap</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Parola"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Giriş Yap" onPress={handleLogin} color="#1E90FF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Kayıt Ol" onPress={navigateToSignUpPage} color="#32CD32" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFD700', // Arka plan rengini sarı olarak değiştirin
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 100, // Logo genişliği
    height: 100, // Logo yüksekliği
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 215, 0, 0.5)', // Yarı saydam sarı renk katmanı
    borderRadius: 50, // Logonun köşelerini yuvarlamak için
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333', // Yazı rengi
  },
  error: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff', // Giriş alanı arka plan rengi
  },
  buttonContainer: {
    marginBottom: 12, // Butonlar arasında boşluk bırakmak için
  },
});

export default LoginScreen;
