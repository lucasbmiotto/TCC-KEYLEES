import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { savePassword, saveSeed } from '../utils/Storage';
import uuid from 'react-native-uuid';

export default function CreateWalletScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleCreate = async () => {
    try {
      if (password !== confirm || !password) {
        Alert.alert('Erro', 'Senhas não coincidem ou estão vazias');
        return;
      }
      const generatedSeed = uuid.v4();

      await savePassword(password);
      await saveSeed(generatedSeed);

      Alert.alert('Sucesso', 'Carteira criada! Indo para a frase de segurança...');
      navigation.navigate('SeedPhrase', { seed: generatedSeed });
    } catch (error) {
      console.error('Erro no handleCreate:', error);
      Alert.alert('Erro', 'Algo deu errado ao criar a carteira.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Carteira</Text>
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
        style={styles.input}
      />
      <Button title="Continuar" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});
