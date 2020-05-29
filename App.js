import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TranferScreen from './screens/TranferScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TranferScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
