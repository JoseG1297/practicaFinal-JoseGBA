import { useState } from 'react';

import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from "expo-image-picker";


export default function Footer() 
{
  const navigation = useNavigation();
  const [imagenes, setImagenes] = useState([]);



  const irBiografia = () => {
    navigation.navigate('Biografia')
  }

  const irInicio = () => {
    navigation.navigate('Home')
  }

  const agregarImagenes = async () => { 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });


    if (result.assets.length > 0) {
      setImagenes(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => irBiografia()}>
            <MaterialCommunityIcons name="image-multiple-outline"  size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => irInicio()}>
            <AntDesign name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => agregarImagenes()}>
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
