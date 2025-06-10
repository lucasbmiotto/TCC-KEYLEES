import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WalletActionsScreen({ navigation }) {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(generateRandomHash());
  }, []);

  const generateRandomHash = () => {
    return Math.random().toString(16).substring(2, 18).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jon Doe</Text>
        <Text style={styles.hash}>{hash}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.grayButton}>
          <Button 
            title="Chaves da Carteira" 
            color="#666" 
            onPress={() => navigation.navigate('Key')} 
          />
        </View>

        <View style={styles.blueButton}>
          <Button 
            title="Backup da Carteira" 
            color="#007BFF" 
            onPress={() => navigation.navigate('WalletBackup')} 
          />
        </View>

        <View style={styles.grayButton}>
          <Button 
            title="Excluir Carteira" 
            color="#666" 
            onPress={() => navigation.navigate('DeleteScreen')} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 110,
    marginBottom: 60,
  },
  title: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    marginBottom: 1, 
    textAlign: 'center',
  },
  hash: { 
    fontSize: 15, 
    color: 'gray', 
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 10, 
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  grayButton: {
    marginVertical: 45,
    borderRadius: 8,
    overflow: 'hidden',
    width: '80%',
  },
  blueButton: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    width: '80%',
  }
});
