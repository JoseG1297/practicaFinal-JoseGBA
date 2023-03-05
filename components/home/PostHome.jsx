import { View, StyleSheet, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
 
export default function PostHome({postState}) {
  return (
    <View style={styles.container}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.containerImages}> 
            <View>
                <Image source={{ uri: postState.usere_image }} style={styles.profilePost} />
                <Text style={{ color: "white" }}>{postState.user_name}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    marginBottom: 30
  },
  containerImages:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin:5,
    alignItems: "center"
  },
  profilePosts:{
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderBottomColor: 1.6,
    borderColor: "#ffffff"
  }
});
