import { SafeAreaView, StyleSheet, Text } from 'react-native';

import HeaderHome from '../home/HeaderHome';
import StoriesHome from '../home/StoriesHome';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      <StoriesHome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
