import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function ShareScreen({ navigation }) {
  const credentials = [
    { value: 'Jon Doe', route: 'QRCode' },
    { value: 'jon.doe@email.com', route: 'QRCode' },
    { value: 'did:key:abc123xyz', route: 'QRCode' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CREDENCIAIS</Text>
      <View style={styles.table}>
        {credentials.map((cred, idx) => (
          <View key={idx} style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={cred.value}
              editable={false}
              selectTextOnFocus={false}
            />
            <View style={styles.buttonWrapper}>
              <Button
                title="Ver"
                onPress={() => navigation.navigate(cred.route)}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' },
  table: {
    width: 320,
    padding: 24,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 16,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#eee',
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  buttonWrapper: {
    width: 70,
  },
});