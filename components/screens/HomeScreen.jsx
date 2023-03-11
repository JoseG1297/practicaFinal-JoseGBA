import { useEffect, useState, useContext } from "react";

import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import { database,ref, set, child, onValue } from '../../firebaseConfig/database';

import HeaderHome from '../home/HeaderHome';
import StoriesHome from '../home/StoriesHome';
import PostContainer from '../generales/PostContainer';
import Footer from '../generales/Footer';


import UsuarioSesionContext from '../hooks/SessionUser';

const postData = [
    {
        uid: 2,
        user_image: 'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
        user_name: 'Test User DOS',
        post_caption: "Un texto mas largo que es el que va a describir la imagen que acabo de postear, una leve descripcion pero se entienede",
        post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
    }
]

export default function HomeScreen({ navigation }) 
{
  const { userInfo, setUserInfo } = useContext(UsuarioSesionContext);

  useEffect(() => {
    (async () => {
      const starCountRef = ref(database, `users/${userInfo.uid}`);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setUserInfo(snapshot.val())
        } else {
          console.log("No data available");
          navigation.navigate('Login');
        }
      })
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
        <Divider  orientation='vertical'/>
      <StoriesHome />
      <ScrollView>
        {postData.map((post, index) =>(
            <PostContainer postState={post}  key={post.uid}/>
        ))}
      </ScrollView>
      <Divider  orientation='vertical'/>
      <Footer postFrom="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
