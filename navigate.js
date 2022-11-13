import React, { useEffect } from 'react';
import StartScreen from './screens/StartScreen';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from './screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="Start" component={StartScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
</NavigationContainer>

}