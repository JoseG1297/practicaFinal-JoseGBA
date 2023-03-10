import { View, StyleSheet, Image, Pressable, Text} from 'react-native';
import Textarea from 'react-native-textarea';

export default function NuevoPost({route})
{
    return (
        <View style={styles.container}> 
            <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                maxLength={120}
                placeholder={'Escribe un comentario al respecto。。。'}
                placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
            />
            <Image source={{uri: "data:image/png;base64,"+route.params.post}} style={styles.imageStyle} />
            <Pressable  style={styles.pressLogin} titleSize={20} >
                <Text style={styles.pressLoginText}>Publicar</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 12
    },
    logoContainer:{
      alignItems: 'center',
      marginTop:60,
    },
    imageStyle:{
        width: "100%",
        height: 450
    },
    textareaContainer: {
      height: 150,
      padding: 5,
      backgroundColor: '#F5FCFF',
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 14,
      color: '#333',
    },
    pressLogin:{
        marginTop: 20,
        backgroundColor: '#333739',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    },
    pressLoginText:{
        fontWeight: '600',
        color: '#fff',
        fontSize: 18
    }
  });