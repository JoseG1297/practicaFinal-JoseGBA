import React, {useState} from 'react';

import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Cargando from '../generales/Cargando';
import AlertModal from '../generales/AlertModal';

import {createAt, signIn, resetPassword} from '../../firebaseConfig/auths'

export default function FormRecuperarScreen() 
{
  const navigation = useNavigation();
  
  const irAlLogin = () => {
    navigation.navigate('Login')
  }

  const [userEmail, setUserEmail] = useState('');

  
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

    setLoading(true);

    resetPassword(userEmail)
    .then((correoEnviado) => {
      setLoading(false);
      if(correoEnviado){
        setErrortext('Correo enviado exitosamente!') ;
        setShowModal(true);
        setCambiarVista(true)
      }
      else{
        setErrortext('No se pudo enviar el correo, intenta de nuevo!') ;
        setShowModal(true);
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
        <Pressable onPress={() => verificarUsuario()} style={styles.pressLogin} titleSize={20} >
          <Text style={styles.pressLoginText}>Recuperar Contrasena</Text>
        </Pressable>
        <View style={styles.registroContainer}>
          <Text>Deseas iniciar sesion?</Text>
          <TouchableOpacity onPress={() => irAlLogin()}>
            <Text style={{ color: '#1D96EA' }}>  Da clic aqui.</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <AlertModal modalVisible={showModal} setModalVisible={setShowModal} mensaje={errortext} cambiarVista={cambiaVista}  />
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