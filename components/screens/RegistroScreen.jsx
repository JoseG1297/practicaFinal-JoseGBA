import { StyleSheet, Image, View, SafeAreaView } from 'react-native';

import FormRegisterScreen from '../auths/FormRegisterScreen';

export default function RegistroScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.imageStyle} source={require('../../imagenes/LogoBlack.png')} />
      </View>
      <FormRegisterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoContainer:{
    alignItems: 'center',
    marginTop:60,
  },
  imageStyle:{
    width:250,
    height:75,
    resizeMode: 'contain'
  }
});