import { StyleSheet,LogBox,  SafeAreaView } from 'react-native';

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
"Cannot read property",
"EPERM: operation not permitted"
])

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

