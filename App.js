import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from './screens/screen1';

export default function App() {
  return (
    <View style={styles.container}>
      <Animated />
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
