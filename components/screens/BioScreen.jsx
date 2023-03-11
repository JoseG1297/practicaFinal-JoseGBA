import React, {useState, useContext, useEffect} from 'react';


import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';


import PostContainer from '../generales/PostContainer';
import Footer from '../generales/Footer';
import HeaderBio from  '../bio/HeaderBio';

import UsuarioSesionContext from '../hooks/SessionUser';


import { database,ref, set, child, onValue } from '../../firebaseConfig/database';

export default function BioScreen({ navigation }) 
{
  const { userInfo, setUserInfo } = useContext(UsuarioSesionContext);
  const [postData, setPostsData] = useState([]);


  useEffect(() => {
    (async () => {
      const starCountRef = ref(database, "postsUser/" + userInfo.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          setPostsData(snapshot.val())
        } else {
          console.log("No data available");
        }
      })
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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

