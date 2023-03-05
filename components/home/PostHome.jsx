import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
 
export default function PostHome({postState}) {
  return (
    <View style={styles.container}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.containerHeader}> 
            <View style={styles.conatinerInfoHeader}>
                <Image  source={{ uri: postState.user_image }} style={styles.profilePosts} />
                <Text style={styles.profileText}>{postState.user_name}</Text>
            </View>
        </View>
        <View style={styles.containerImagePost}>
          <FlatList
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            data={postState.post_images}
            renderItem={ ({ item, index }) => (
              <Image source={{ uri: item.url }} key={index} style={{width: 450,  height: 450, resizeMode:'cover'}} />
            )}
          />
          <Text style={styles.profileText}>{postState.user_name}</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
  containerHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin:5,
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
    borderColor: "white",
    resizeMode: 'contain'
  },
  profileText:{
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  }
});
