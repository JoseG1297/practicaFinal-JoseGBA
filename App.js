import { StyleSheet, Text, SafeAreaView } from 'react-native';

import NavegacionGeneral from './components/navegacion/NavegacionGeneral';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavegacionGeneral />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'column',
  },
});

