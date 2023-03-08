import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function FormRegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputStyle}>
            <TextInput  
            placeholderTextColor="#444"
            placeholder='Nombre de Usuario'
            autoCapitalize='none'
            textContentType='username'
            autoFocus={true}/>
        </View>
        <View style={styles.inputStyle}>
            <TextInput  
            placeholderTextColor="#444"
            placeholder='Nombre Completo'
            autoCapitalize='none'
            textContentType='username'
            autoFocus={true}/>
        </View>
        <View style={styles.inputStyle}>
            <TextInput  
            placeholderTextColor="#444"
            placeholder='Correo Electronico'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}/>
        </View>
        <View style={styles.inputStyle}>
            <TextInput 
            placeholderTextColor="#444"
            placeholder='Contrasena'
            autoCapitalize='none'
            autoCorrect={true}
            secureTextEntry={true}
            textContentType='password'
            />
        </View>
        <Pressable style={styles.pressLogin} titleSize={20} >
            <Text style={styles.pressLoginText}>Registrarme</Text>
        </Pressable>
        <View style={styles.registroContainer}>
            <Text>Ya tienes alguna cuenta?</Text>
            <TouchableOpacity>
                <Text style={{ color: '#1D96EA' }}>  Ingresa aqui.</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  inputStyle: {
    borderRadius: 4,
    padding: 12,
    backgroundColor:'#F5F5F5',
    marginBottom: 15,
    borderWidth: 1
  },
  pressLogin:{
    backgroundColor: '#0D74BB',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  pressLoginText:{
    fontWeight: '600',
    color: '#fff',
    fontSize: 18
  },
  registroContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  }
});