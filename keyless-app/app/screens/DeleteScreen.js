import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function KeysScreen() {
  const navigation = useNavigation();

  const handleDelete = () => {
    Alert.alert(
      'Confirmação',
      'Deseja realmente excluir as chaves?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => console.log('Chaves excluídas') },
      ]
    );
  };

  const handleBack = () => {
    navigation.navigate('WalletAction');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEM CERTEZA QUE DESEJA EXCLUIR OS DADOS DE SUA CARTEIRA?</Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#b2a9a9',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  backButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});