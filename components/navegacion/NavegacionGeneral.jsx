import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import "react-native-gesture-handler"; 

import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import BioScreen from '../screens/BioScreen';
import HomeScreen from '../screens/HomeScreen';
import RecContraScreen from '../screens/RecContraScreen';
import NuevoPost from '../generales/NuevoPost';

const Stack = createNativeStackNavigator();

export default function NavegacionGeneral() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}   />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}   />
        <Stack.Screen name="Biografia" component={BioScreen} options={{headerShown: false}}  />
        <Stack.Screen name="RecuperarContra" component={RecContraScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Nuevo Post" component={NuevoPost} initialParams={{ img: '' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
