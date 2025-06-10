import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomePageScreen({ navigation }) {
  const username = "Jon Doe";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/keyless-notext.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="CADASTRAR" onPress={() => navigation.navigate('SignIn')} />
        <Button title="COMPARTILHAR" onPress={() => navigation.navigate('Share')} />
        <Button title="CONFIGURAÇÕES" onPress={() => navigation.navigate('Pagina3')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'flex-start',
    paddingLeft: 0,
  },
  logoContainer: {
    flex: 2.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: -32, 
  },
  logo: { width: 240, height: 240 },
  username: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'left',
    marginLeft: 4, 
  },
  buttons: { gap: 16 },
});