import { StyleSheet, Image, View, SafeAreaView } from 'react-native';

import FormRecuperarScreen from '../auths/FormRecuperarScreen';

export default function RecContraScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.imageStyle} source={require('../../imagenes/LogoBlack.png')} />
      </View>
      <FormRecuperarScreen />
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