import React, {useState, useContext, useEffect} from 'react';

import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import UsuarioSesionContext from '../hooks/SessionUser';

import { database,ref, set, child, onValue } from '../../firebaseConfig/database';

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

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../imagenes/LogoBlack.png')} />
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
