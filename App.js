import React from 'react';
// import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import HomeScreen from './src/screens/HomeScreen';



const Stack = createNativeStackNavigator();



const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              {/* <Stack.Screen name="Splash" component={Splash} /> */}
              <Stack.Screen name="HomeScreen" component={HomeScreen} />

            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App