import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';


import PostContainer from '../generales/PostContainer';
import Footer from '../generales/Footer';
import HeaderBio from  '../bio/HeaderBio';

const postData = [
  {
    uid: 2,
      user_image: 'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      user_name: 'Test User DOS',
      post_caption: "Un texto mas largo que es el que va a describir la imagen que acabo de postear, una leve descripcion pero se entienede",
      post_images: [{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'}, {url:'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg' }],
     
  }
]

export default function BioScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBio />
      <Divider width={5} orientation='vertical'/>
      <ScrollView>
        {postData.map((post, index) =>(
            <PostContainer postState={post}  key={post.uid}/>
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

