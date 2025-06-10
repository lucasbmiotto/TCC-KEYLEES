import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function QRCodeScreen() {
  const username = "Jon Doe";
  const qrValue = "Exemplo de valor para QRCode"; 

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
      <View style={styles.qrWrapper}>
        <View style={styles.qrPlaceholder}>
          <Text style={{ color: '#888' }}>QR Code aqui</Text>
        </View>
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
  qrWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  qrPlaceholder: {
    width: 220,
    height: 220,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 16,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});