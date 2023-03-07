import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';


import Footer from '../generales/Footer';
import HeaderBio from  '../bio/HeaderBio';

import Gallery from 'react-native-awesome-gallery';

// ...

const images = ['https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU'];


export default function BioScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBio />
      <Divider width={5} orientation='vertical'/>
      <Gallery
        data={images}
        onIndexChange={(newIndex) => {
          console.log(newIndex);
        }}
      />
      <Divider width={5} orientation='vertical'/>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});

