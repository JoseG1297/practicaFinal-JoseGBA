import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

export default function Footer() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <AntDesign name="switcher" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
            <AntDesign name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
            <AntDesign style={styles.icons} name="pluscircleo" size={30} color="white" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  icons:{
    marginLeft: 10,
  }
});
