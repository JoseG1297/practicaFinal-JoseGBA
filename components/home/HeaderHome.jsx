import { View, StyleSheet, Text } from 'react-native';

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <Image source={require('../../imagenes/LogoWhite.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
