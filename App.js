import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import NavegacionInterna from './components/navegacion/NavegacionInterna';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavegacionInterna />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

