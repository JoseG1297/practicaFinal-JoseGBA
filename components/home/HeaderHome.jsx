import React, {useState, useContext, useEffect} from 'react';

import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import UsuarioSesionContext from '../hooks/SessionUser';

import { database,ref, set, child, onValue } from '../../firebaseConfig/database';

import * as ImagePicker from "expo-image-picker";

export default function HeaderHome() 
{
  const { userInfo, setUserInfo } = useContext(UsuarioSesionContext);
  const navigation = useNavigation();


  const cerrarSesion = () => {
    navigation.navigate('Login')
  }

  useEffect(() => {
    (async () => {
      const starCountRef = ref(database, `users/${userInfo.uid}`);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setUserInfo(snapshot.val())
        } else {
          console.log("No data available");
        }
      })
    })();
  }, []);


  
  const agregarImagenes = async () => { 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });


    if (result.assets.length > 0) {
        navigation.navigate({
          name: 'Nueva Historia',
          params: { url: result.assets[0].base64 , postearEn: 'Home'}
      });
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../imagenes/LogoBlack.png')} />
      </TouchableOpacity>
      <View style={styles.iconosContainer}>
        <TouchableOpacity style={styles.icons}  onPress={() => agregarImagenes()}>
            <MaterialIcons name="amp-stories" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  tyle={styles.icons} onPress={() => cerrarSesion()}>
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
    marginRight: 10,
  }
});
