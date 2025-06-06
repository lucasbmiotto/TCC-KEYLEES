import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const generateSeed = () => {
  const words = [];
  const wordlist = ['apple', 'car', 'blue', 'mountain', 'river', 'cloud', 'wallet', 'secure', 'open', 'trust', 'key', 'light'];
  for (let i = 0; i < 12; i++) {
    words.push(wordlist[Math.floor(Math.random() * wordlist.length)]);
  }
  return words.join(' ');
};

export default function SeedPhraseScreen({ navigation, route }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(generateSeed());
  }, []);

  const handleContinue = () => {
    navigation.navigate('Welcome', { seed });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frase de Segurança</Text>
      <Text style={styles.warning}>Anote essa frase, ela só será exibida uma vez:</Text>
      <Text style={styles.seed}>{seed}</Text>
      <Button title="Seguinte" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 10 },
  warning: { textAlign: 'center', color: 'red', marginBottom: 10 },
  seed: { textAlign: 'center', fontSize: 18, marginBottom: 20 },
});
