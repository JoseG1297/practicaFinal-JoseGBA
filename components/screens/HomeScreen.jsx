import { SafeAreaView, StyleSheet, Text } from 'react-native';

import HeaderHome from '../home/HeaderHome';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
