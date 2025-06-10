import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function KeysScreen() {
  const [showPrivate, setShowPrivate] = useState(false);
  const [showPublic, setShowPublic] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Chaves</Text>

      <Text style={styles.label}>Chave Privada</Text>
      <View style={styles.inputRow}>
        <TextInput
          secureTextEntry={!showPrivate}
          style={styles.input}
          editable={false}
          value="48129ufdsfjoav1948903"
        />
        <TouchableOpacity onPress={() => setShowPrivate(!showPrivate)}>
          <Ionicons name={showPrivate ? "eye-off" : "eye"} size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Chave Pública</Text>
      <View style={styles.inputRow}>
        <TextInput
          secureTextEntry={!showPublic}
          style={styles.input}
          editable={false}
          value="78174ufhdsjn813yr802"
        />
        <TouchableOpacity onPress={() => setShowPublic(!showPublic)}>
          <Ionicons name={showPublic ? "eye-off" : "eye"} size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#b2a9a9', // cor semelhante ao fundo da imagem
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    letterSpacing: 2,
  },
});
