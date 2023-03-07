import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';


import Footer from '../generales/Footer';
import HeaderBio from  '../bio/HeaderBio' 

export default function BioScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBio />
      <Divider width={5} orientation='vertical'/>

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

