import React, {useState} from 'react';

import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import {createAt, signIn} from '../../firebaseConfig/auths'

import Cargando from '../generales/Cargando';
import AlertModal from '../generales/AlertModal';


export default function FormLoginScreen() 
{
  const navigation = useNavigation();
  
  const irAlRegistro = () => {
    navigation.navigate('Registro')
  }

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [cambiaVista, setCambiarVista] = useState(false);

  const verificarUsuario = () => {
    setErrortext('');
    if (!userEmail) {
        setErrortext('Debes ingresar un Correo');
        setShowModal(true);
      return;
    }
    if (!userPassword) {
        setErrortext('Debes ingresar el Password');
        setShowModal(true);
      return;
    }
    setLoading(true);

    signIn(userEmail, userPassword)
    .then((data) => {
      setLoading(false);
      if(data.code != undefined)
      {
        switch(data.code)
        {
          case 'auth/invalid-email':
            setErrortext('El email que ingresaste es invalido.') ;
            setShowModal(true);
          break;
          case 'auth/wrong-password':
            setErrortext('El password es incorrecto, verifica.') ;
            setShowModal(true);
          break;
          case 'auth/user-not-found':
            setErrortext('El usuario no ha sido encontrado, verifica.') ;
            setShowModal(true);
          break;
        }
      }
      else
      {
        if(data.user != undefined)
        {
          setCambiarVista(true);
          navigation.navigate({
              name: 'Home',
          });
        }
        else
        {
            setErrortext('No se pudo registrar correctamente al usuario, intente de nuevo.') ;
            setShowModal(true);
        }
      }
    })
    .catch((error) => {
        setErrortext('Error: ' + error.message) ;
        setShowModal(true);
        setLoading(false);
    });
}

  return (
    <>
    <Cargando loading={loading} />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputStyle}>
          <TextInput 
            onChangeText={setUserEmail} 
            placeholderTextColor="#444"
            placeholder='Ingresa tu Correo'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}/>
        </View>
        <View style={styles.inputStyle}>
          <TextInput 
            onChangeText={setUserPassword}
            placeholderTextColor="#444"
            placeholder='Ingresa Contrasena'
            autoCapitalize='none'
            autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            />
        </View>
        <View style={styles.passwordForget}>
          <TouchableOpacity>
            <Text style={{ color: '#1D96EA' }}>Olvidaste tu contrasena?</Text>
          </TouchableOpacity>
        </View>
        <Pressable onPress={() => verificarUsuario()} style={styles.pressLogin} titleSize={20} >
          <Text style={styles.pressLoginText}>Ingresar</Text>
        </Pressable>
        <View style={styles.registroContainer}>
          <Text>Aun no te has registrado?</Text>
          <TouchableOpacity onPress={() => irAlRegistro()}>
            <Text style={{ color: '#1D96EA' }}>  Registrate aqui.</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <AlertModal modalVisible={showModal} setModalVisible={setShowModal} mensaje={errortext}  />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  inputStyle: {
    borderRadius: 4,
    padding: 12,
    backgroundColor:'#F5F5F5',
    marginBottom: 10,
    borderWidth: 1
  },
  passwordForget:{
    alignItems: 'flex-end',
    marginBottom: 30
  },
  pressLogin:{
    backgroundColor: '#333739',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },
  pressLoginText:{
    fontWeight: '600',
    color: '#fff',
    fontSize: 18
  },
  registroContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  }
});