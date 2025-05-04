// src/screens/SplashScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [hasWallet, setHasWallet] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkWallet = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));

      const wallet = await AsyncStorage.getItem('user_wallet'); // Verifica se existe a carteira
      setHasWallet(!!wallet);  // Se tiver a carteira, tem valor. Senão, é null ou undefined.
      setLoading(false);
    };

    checkWallet();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/keyless-logo.png')} style={styles.logo} />
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (hasWallet) {
    // Tela para quem já tem carteira
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Digite sua senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Desbloquear</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela para quem ainda não tem carteira
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Carteira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#aaa' }]}>
        <Text style={styles.buttonText}>Importar Carteira</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
  logo: {
    width: 200, height: 200, marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20,
  },
  input: {
    width: '80%', padding: 12, borderWidth: 1, borderColor: '#ccc',
    borderRadius: 10, marginBottom: 20,
  },
  button: {
    backgroundColor: '#000', padding: 15, borderRadius: 10, marginTop: 10, width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
});
