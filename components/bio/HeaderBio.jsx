import React, {useState, useContext} from 'react';


import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import UsuarioSesionContext from '../hooks/SessionUser';

import * as ImagePicker from "expo-image-picker";

export default function HeaderBio() 
{
  const { userInfo, setUserInfo } = useContext(UsuarioSesionContext);
  const navigation = useNavigation();
  
  const cerrarSesion = () => {
    navigation.navigate('Login')
  }


  const agregarImagenes = async () => { 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });


    if (result.assets.length > 0) {
        navigation.navigate({
          name: 'Foto Perfil',
          params: { url: result.assets[0].base64 , postearEn: 'Biografia'}
      });
    }
  }

  return (
    <View>
      <View style={styles.container}>
          <TouchableOpacity>
            {userInfo.user_image != "" && userInfo.user_image != undefined ? <Image  source={{ uri: userInfo.user_image }} style={styles.profilePosts} /> :
                <Image  source={require('../../imagenes/defaultImg.jpg')} style={styles.profilePosts} />}
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => agregarImagenes()}>
            <FontAwesome5 name="user-cog" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => cerrarSesion()}>
              <AntDesign name="logout" size={30} color="black" />
          </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.profileText}>{userInfo.user_name != "" && userInfo.user_name != undefined ? userInfo?.user_name : "SIN NOMBRE DE USUARIOS"}</Text>
          <Text style={styles.profileSubTitle}>{userInfo.user_fullname != "" && userInfo.user_fullname != undefined != undefined ? userInfo?.user_fullname : "SIN NOMBRE COMPLETO"}</Text>
      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 10,
      maxHeight: 250
    },
    profilePosts:{
      width: 105,
      height: 105,
      borderRadius: 50,
      marginLeft: 15,
      borderWidth: 3,
      borderColor: "black",
      resizeMode: 'contain',
      marginBottom: 10,
      marginTop:10
    },
    profileText:{
      color: "black",
      fontSize: 18,
      marginLeft: 10,
      fontWeight: "bold",
    },
    profileSubTitle:{
      color: "black",
      fontSize: 12,
      marginLeft: 10,
    }
  });
  

