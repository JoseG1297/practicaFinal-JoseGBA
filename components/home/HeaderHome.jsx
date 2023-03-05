import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../imagenes/LogoWhite.png')} />
      </TouchableOpacity>
      <View style={styles.iconosContainer}>
        <TouchableOpacity>
          <AntDesign style={styles.icons} name="pluscircleo" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign style={styles.icons} name="smileo" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons style={styles.icons} name="chatbubble-outline" size={30} color="white" />
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
