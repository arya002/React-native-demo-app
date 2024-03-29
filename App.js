import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import ScreenNavigator from './navigation/ScreenNavigator';

export default function App() {
  return (
    <ScreenNavigator />
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
