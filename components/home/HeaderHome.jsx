import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../imagenes/LogoWhite.png')} />
      </TouchableOpacity>
      <View style={styles.iconosContainer}>
        <TouchableOpacity>
            <SimpleLineIcons name="logout" size={30} color="white" />
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
