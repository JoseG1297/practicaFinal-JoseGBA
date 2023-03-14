import React, {useState, useContext} from 'react';

import { View, StyleSheet, Image, Pressable, Text} from 'react-native';
import Textarea from 'react-native-textarea';

import {  database, ref, set, get, child, onValue, db, collection, doc, setDoc  } from '../../firebaseConfig/database';

import uuid from 'react-native-uuid';

import UsuarioSesionContext from '../hooks/SessionUser';

import Cargando from '../generales/Cargando';
import AlertModal from '../generales/AlertModal';

export default function NuevoStorie({route})
{
  let provieneDe = "";
  let base64Img = '';
  provieneDe = route.params.postearEn;
  base64Img = route.params.url;
  const { userInfo, setUserInfo } = useContext(UsuarioSesionContext);
  const [postCaption, setPostCaption] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errortext, setErrortext] = useState('');

  const publicarPost  =  async  () => 
  {
      setLoading(true);
      let storyId = uuid.v4();
      
      const postStories = collection(db, 'postStories');
      const img64 = "data:image/png;base64,"+ base64Img;

      await setDoc(doc(postStories, storyId), {
        uid: userInfo.uid,
        user_name: userInfo?.user_name,
        user_image: userInfo?.user_image,
        stories: [
        {
            story_id: storyId,
            story_image: img64,
            swipeText: postCaption,
        }
        ],
      }).then((dt) => {
        setLoading(false);
        setErrortext('Publicacion realizadas conn exito!') ;
        setShowModal(true);
    })
    .catch((error) => {
      setLoading(false);
      setErrortext('Publicacion Fallida, intenta de nuevo!') ;
      setShowModal(true);
    }
    );

    
  };  

    return (
        <View style={styles.container}> 
          <Cargando loading={loading} />
            <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={setPostCaption}
                maxLength={120}
                placeholder={'Escribe un comentario al respecto。。。'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
            />
            <Image source={{uri: "data:image/png;base64,"+ base64Img}} style={styles.imageStyle} />
            <Pressable  onPress={() => publicarPost()} style={styles.pressLogin} titleSize={20} >
                <Text style={styles.pressLoginText}>Publicar Historia</Text>
            </Pressable>
            <AlertModal modalVisible={showModal} setModalVisible={setShowModal} mensaje={errortext} vista={provieneDe} cambiarVista={true} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 12
    },
    logoContainer:{
      alignItems: 'center',
      marginTop:60,
    },
    imageStyle:{
        width: "100%",
        height: 450
    },
    textareaContainer: {
      height: 150,
      padding: 5,
      backgroundColor: '#F5FCFF',
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 14,
      color: '#333',
    },
    pressLogin:{
        marginTop: 20,
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
    }
  });