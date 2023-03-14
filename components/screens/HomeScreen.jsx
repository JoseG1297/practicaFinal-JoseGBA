import { useEffect, useState } from "react";

import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import {database, ref, set, get, child, onValue, db, collection, doc, setDoc, getDocs, orderBy, query } from '../../firebaseConfig/database';

import HeaderHome from '../home/HeaderHome';
import StoriesHome from '../home/StoriesHome';
import PostContainer from '../generales/PostContainer';
import Footer from '../generales/Footer';
import Cargando from '../generales/Cargando';

import {useIsFocused} from '@react-navigation/native';

export default function HomeScreen({ navigation, routes }) 
{
  const [postData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "postUsers"), orderBy("post_datetime", "desc"));

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
      <HeaderHome />
        <Divider  orientation='vertical'/>
      <StoriesHome />
      <ScrollView>
         {postData.map((post, index) =>(
            <PostContainer postState={post}  key={post.post_id}/>
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
