import { useEffect, useState } from "react";

import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import { database,ref, set, child, onValue } from '../../firebaseConfig/database';

import HeaderHome from '../home/HeaderHome';
import StoriesHome from '../home/StoriesHome';
import PostContainer from '../generales/PostContainer';
import Footer from '../generales/Footer';


export default function HomeScreen({ navigation }) 
{
  const [postData, setPostsData] = useState([]);


  useEffect(() => {
    (async () => {
      const starCountRef = ref(database, `postsUser`);
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
