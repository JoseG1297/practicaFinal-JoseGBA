
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import "react-native-gesture-handler"; 

import BioScreen from '../screens/BioScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function NavegacionInterna() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}   />
        <Stack.Screen name="Biografia" component={BioScreen} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
