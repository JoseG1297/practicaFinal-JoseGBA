import React, {useState, useContext} from 'react';

import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';


export default function PostHome({postState}) 
{
  console.log(postState);
  return (
    <View style={styles.container}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.containerHeader}> 
            <View style={styles.conatinerInfoHeader}>
              {postState?.user_image != "" ? <Image  source={{ uri: postState.user_image }} style={styles.profilePosts} /> :
              <Image  source={require('../../imagenes/defaultImg.jpg')} style={styles.profilePosts} />}
                <Text style={styles.profileText}>{postState?.user_name}</Text>
            </View>
          <View style={styles.containerIcons}>
              <TouchableOpacity>
                <MaterialIcons  name="save-alt" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                  <AntDesign  style={styles.icons} name="like2" size={30} color="black" />
              </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.postCaption}>{postState.post_caption}</Text>
        <View style={styles.containerImagePost}>
          {/* <FlatList
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            data={postState.post_images}
            renderItem={ ({ item, index }) => (
              <Image source={{ uri: item.url }} key={index} style={{width: 450,  height: 450, resizeMode:'cover'}} />
            )}
          /> */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  containerHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin:5,
    paddingTop: 10,
    alignItems: "center"
  },
  conatinerInfoHeader:{
    flexDirection: "row",
    alignItems: "center"
  },
  containerImagePost:{
    width: "100%",
    height: 450
  },
  profilePosts:{
    width: 55,
    height: 55,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "black",
    resizeMode: 'contain'
  },
  profileText:{
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  postCaption:{
    color: "black",
    fontSize: 16,
    marginRight: 10,
    fontWeight: "bold",
    textAlign: "justify",
    margin: 5
  },
  containerIcons: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  icons:{
    marginLeft: 10,
  }
});
