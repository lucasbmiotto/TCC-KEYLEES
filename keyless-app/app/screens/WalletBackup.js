import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function DownloadWalletScreen() {
const navigation = useNavigation();
  const handleDownload = () => {
    console.log('Download iniciado');
    
  };

  const handleClose = () => {
        navigation.navigate('WalletAction');
 
  };

  return (
    <View style={styles.container}>
      {/* Botão de fechar */}
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Faça o Dowload de sua carteira</Text>
      <Text style={styles.subtitle}>Selecione o ícone abaixo</Text>

      {/* Botão de download */}
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Ionicons name="arrow-down-circle-outline" size={64} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 30,
    textAlign: 'center',
  },
  downloadButton: {
    backgroundColor: '#2266ff',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
});