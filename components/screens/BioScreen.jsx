import React, {useState, useContext, useEffect} from 'react';


import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';

import {database, ref, set, get, child, onValue, db, collection, doc, setDoc, getDocs, orderBy, query, where } from '../../firebaseConfig/database';


import {useIsFocused} from '@react-navigation/native';


import PostContainer from '../generales/PostContainer';
import Footer from '../generales/Footer';
import HeaderBio from  '../bio/HeaderBio';
import Cargando from '../generales/Cargando';

import UsuarioSesionContext from '../hooks/SessionUser';



export default function BioScreen({ navigation }) 
{
  const { userInfo, setUserInfo } = useContext(UsuarioSesionContext);
  const [postData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "postUsers"), where("uid", "==", userInfo.uid), orderBy("post_datetime", "desc"));

      const querySnapshot = await getDocs(q);
      const posts = [];
      querySnapshot.forEach((doc) => {
          posts.push(doc.data());
      });
      setPostsData( posts )
      setLoading(false);
    })();
  }, [isFocused]);



  return (
    <SafeAreaView style={styles.container}>
    <Cargando loading={loading} />
      <HeaderBio />
      <Divider width={5} orientation='vertical'/>
      <ScrollView>
        {postData.map((post, index) =>(
            <PostContainer postState={post}  key={post?.post_id}/>
        ))}
      </ScrollView>
      <Divider width={5} orientation='vertical'/>
      <Footer postFrom="Biografia" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

