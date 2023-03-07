import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function BioScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BIO SCREEN</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

