import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import CreateWalletScreen from '../screens/CreateWalletScreen';
import SeedPhraseScreen from '../screens/SeedPhraseScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WalletActionsScreen from '../screens/WalletActionScreen';
import KeyScreen from '../screens/KeyScreen';
import DeleteScreen from '../screens/DeleteScreen';
import WalletBackup from '../screens/WalletBackup';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="WalletAction" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="CreateWallet" component={CreateWalletScreen} />
      <Stack.Screen name="SeedPhrase" component={SeedPhraseScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="WalletAction" component={WalletActionsScreen} />
      <Stack.Screen name="Key" component={KeyScreen} />
      <Stack.Screen name="DeleteScreen" component={DeleteScreen} />
      <Stack.Screen name="WalletBackup" component={WalletBackup} />

      

    </Stack.Navigator>
  );
}
