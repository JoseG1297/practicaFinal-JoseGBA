import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function FormLoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputStyle}>
        <TextInput  
          placeholderTextColor="#444"
          placeholder='Ingresa tu Correo'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}/>
      </View>
      <View style={styles.inputStyle}>
        <TextInput 
          placeholderTextColor="#444"
          placeholder='Ingresa Contrasena'
          autoCapitalize='none'
          autoCorrect={true}
          secureTextEntry={true}
          textContentType='password'
          />
      </View>
      <View style={styles.passwordForget}>
        <TouchableOpacity>
          <Text style={{ color: '#1D96EA' }}>Olvidaste tu contrasena?</Text>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.pressLogin} titleSize={20} >
        <Text style={styles.pressLoginText}>Ingresar</Text>
      </Pressable>
      <View style={styles.registroContainer}>
        <Text>Aun no te has registrado?</Text>
        <TouchableOpacity>
          <Text style={{ color: '#1D96EA' }}>  Registrate aqui.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  inputStyle: {
    borderRadius: 4,
    padding: 12,
    backgroundColor:'#F5F5F5',
    marginBottom: 10,
    borderWidth: 1
  },
  passwordForget:{
    alignItems: 'flex-end',
    marginBottom: 30
  },
  pressLogin:{
    backgroundColor: '#0D74BB',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
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