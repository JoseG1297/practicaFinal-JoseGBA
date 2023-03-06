import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function HeaderBio() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HEADER SCREEN</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

