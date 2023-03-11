import React, {useState} from 'react';

import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {createAt, signIn} from '../../firebaseConfig/auths'
import { database,ref, set } from '../../firebaseConfig/database';

import Cargando from '../generales/Cargando';
import AlertModal from '../generales/AlertModal';

export default function FormRegisterScreen() 
{
  const navigation = useNavigation();
  
  const irAlLogin = () => {
    navigation.navigate('Login')
  }

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [cambiaVista, setCambiarVista] = useState(false);


  const verficarUsuario = () => { 
    setErrortext('');
    if (!userName) {
        setErrortext('Debes ingresar un nombre de usuario');
        setShowModal(true);
      return;
    }
    if (!fullName) {
        setErrortext('Debes ingresar tu nombre completo');
        setShowModal(true);
      return;
    }
    if (!userEmail) {
        setErrortext('Debes ingresar un correo electronico valido');
        setShowModal(true);
      return;
    }
    if (!userPassword) {
        setErrortext('Debes ingresar una contrasena valida');
        setShowModal(true);
      return;
    }

    
    setLoading(true);

    createAt(userEmail, userPassword)
        .then((data) => {
            if(data.code != undefined)
            {
              switch(data.code)
              {
                case 'auth/invalid-email':
                  setErrortext('El email que ingresaste es invalido.') ;
                  setShowModal(true);
                break;
                case 'auth/weak-password':
                  setErrortext('El password debe contener un minimo de 6 digitos.') ;
                  setShowModal(true);
                break;
                case 'auth/email-already-in-use':
                  setErrortext('El correo ingresado ya se encuentra en uso.') ;
                  setShowModal(true);
                break;
              }
            }
            else
            {
              if(data.user != undefined)
              {
                set(ref(database, "users/" + data.user.uid), {
                  uid: data.user.uid,
                  user_name: userName,
                  user_fullname: fullName,
                }).then((dt) => {
                  setErrortext('registro generado exitosamente!') ;
                  setShowModal(true);
                  setLoading(false);
                  setCambiarVista(true)
                })
                .catch((error) => console.log(error));
              }else
              {
                  setErrortext('No se pudo registrar correctamente al usuario, intente de nuevo.') ;
                  setShowModal(true);
              }
            }
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            setErrortext('Error: ' + error.message) ;
            setShowModal(true);
        });

  };


  return (
    <>
    <SafeAreaView style={styles.container}>
      <Cargando loading={loading} />
        <View style={styles.inputStyle}>
            <TextInput  
            onChangeText={setUserName}
            placeholderTextColor="#444"
            placeholder='Nombre de Usuario'
            autoCapitalize='none'
            textContentType='username'
            autoFocus={true}/>
        </View>
        <View style={styles.inputStyle}>
            <TextInput  
            onChangeText={setFullName}
            placeholderTextColor="#444"
            placeholder='Nombre Completo'
            autoCapitalize='none'
            textContentType='username'/>
        </View>
        <View style={styles.inputStyle}>
            <TextInput  
            onChangeText={setUserEmail}
            placeholderTextColor="#444"
            placeholder='Correo Electronico'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'/>
        </View>
        <View style={styles.inputStyle}>
            <TextInput 
            onChangeText={setUserPassword}
            placeholderTextColor="#444"
            placeholder='Contrasena'
            autoCapitalize='none'
            autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            />
        </View>
        <Pressable onPress={() => verficarUsuario()} style={styles.pressLogin} titleSize={20} >
            <Text style={styles.pressLoginText}>Registrarme</Text>
        </Pressable>
        <View style={styles.registroContainer}>
            <Text>Ya tienes alguna cuenta?</Text>
            <TouchableOpacity onPress={() => irAlLogin()}>
                <Text style={{ color: '#1D96EA' }}>  Ingresa aqui.</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    <AlertModal modalVisible={showModal} setModalVisible={setShowModal} mensaje={errortext} cambiarVista={cambiaVista} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  inputStyle: {
    borderRadius: 4,
    padding: 12,
    backgroundColor:'#F5F5F5',
    marginBottom: 15,
    borderWidth: 1
  },
  pressLogin:{
    backgroundColor: '#333739',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginTop: 30,
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