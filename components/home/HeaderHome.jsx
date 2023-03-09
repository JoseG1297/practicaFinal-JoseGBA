import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function HeaderHome() 
{
  const navigation = useNavigation();


  const cerrarSesion = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../imagenes/LogoWhite.png')} />
      </TouchableOpacity>
      <View style={styles.iconosContainer}>
        <TouchableOpacity  onPress={() => cerrarSesion()}>
              <AntDesign name="logout" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:150,
    height:75,
    resizeMode: 'contain'
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  iconosContainer:{
    flexDirection: 'row',
  },
  icons:{
    marginLeft: 10,
  }
});
