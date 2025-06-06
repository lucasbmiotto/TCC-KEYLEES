import AsyncStorage from '@react-native-async-storage/async-storage';

// Chaves usadas no storage
const PASSWORD_KEY = '@keyless_password';
const SEED_KEY = '@keyless_seed';
const DID_KEY = '@keyless_did';

// Salvar dados
export const savePassword = async (password) => {
  await AsyncStorage.setItem(PASSWORD_KEY, password);
};

export const saveSeed = async (seed) => {
  await AsyncStorage.setItem(SEED_KEY, seed);
};

export const saveDID = async (did) => {
  await AsyncStorage.setItem(DID_KEY, did);
};

// Recuperar dados
export const getPassword = async () => {
  return await AsyncStorage.getItem(PASSWORD_KEY);
};

export const getSeed = async () => {
  return await AsyncStorage.getItem(SEED_KEY);
};

export const getDID = async () => {
  return await AsyncStorage.getItem(DID_KEY);
};

// Apagar tudo (útil pra testes/reset)
export const clearStorage = async () => {
  await AsyncStorage.multiRemove([PASSWORD_KEY, SEED_KEY, DID_KEY]);
};
