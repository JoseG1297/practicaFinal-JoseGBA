
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import "react-native-gesture-handler"; 

import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import BioScreen from '../screens/BioScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function NavegacionAuth() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Registro" >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}   />
        <Stack.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}   />
        <Stack.Screen name="Biografia" component={BioScreen} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
