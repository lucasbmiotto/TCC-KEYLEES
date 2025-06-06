import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/keyless-logo.png')} style={styles.logo} />
      <View style={styles.buttons}>
        <Button title="Criar Carteira" onPress={() => navigation.navigate('CreateWallet')} />
        <Button title="Importar Carteira" disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: { width: 150, height: 150, marginBottom: 40 },
  buttons: { width: '80%', gap: 10 },
});
