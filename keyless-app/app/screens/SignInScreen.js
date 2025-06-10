import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>CADASTRO</Text>
        <Text style={styles.title}>DE</Text>
        <Text style={styles.title}>CREDENCIAL</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Cadastrar" onPress={() => navigation.navigate('')} />
      </View>
      <Text style={styles.orText}>ou</Text>
      <View style={styles.buttonWrapper}>
        <Button title="Importar credencial" onPress={() => navigation.navigate('')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  titleWrapper: { marginBottom: 56, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  buttonWrapper: { width: 200, marginVertical: 8 },
  orText: { marginVertical: 8, fontSize: 16, color: '#888' },
});