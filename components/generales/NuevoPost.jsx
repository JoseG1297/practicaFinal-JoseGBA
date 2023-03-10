import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';


export default function NuevoPost({route})
{
    const { img } = route.params;
    console.log(route.params.post)

    return (
        <View style={styles.container}> 
            <Image source={{uri: "data:image/png;base64,"+route.params.post}} style={styles.imageStyle} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 50,
      paddingHorizontal: 12
    },
    logoContainer:{
      alignItems: 'center',
      marginTop:60,
    },
    imageStyle:{
        width: "100%",
        height: 450
    }
  });