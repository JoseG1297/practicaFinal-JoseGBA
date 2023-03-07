import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function HeaderBio() {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image  source={{ uri: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg' }} style={styles.profilePosts} />
        </TouchableOpacity>
          <TouchableOpacity>
              <Entypo name="facebook"  size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
              <AntDesign name="bells" size={30} color="white"  />
          </TouchableOpacity>
          <TouchableOpacity>
              <AntDesign name="logout" size={30} color="white" />
          </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.profileText}>JOSE G. BAUTISTA</Text>
          <Text style={styles.profileSubTitle}>MAS INFORMACION INECESARIA DE LA PERSONA ESN SU INSTA CHALALALALALA</Text>
          <Text style={styles.profileSubTitle}>MAS INFORMACION INECESARIA DE LA PERSONA ESN SU INSTA CHALALALALALA</Text>
      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 10,
      maxHeight: 250
    },
    profilePosts:{
      width: 105,
      height: 105,
      borderRadius: 50,
      marginLeft: 15,
      borderWidth: 3,
      borderColor: "white",
      resizeMode: 'contain',
      marginBottom: 10,
      marginTop:10
    },
    profileText:{
      color: "white",
      fontSize: 18,
      marginLeft: 10,
      fontWeight: "bold",
    },
    profileSubTitle:{
      color: "white",
      fontSize: 12,
      marginLeft: 10,
    }
  });
  

