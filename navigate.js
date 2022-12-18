import React, { useEffect } from 'react';
import StartScreen from './screens/StartScreen';
import MainScreen from './screens/MainScreen';
import PreScreen from './screens/PreScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from './screens/RegisterScreen';
// import CategoryDetails from './screens/CategoryDetails';
import AddTourScreen from './screens/AddTourScreen';
import CategoryList from './screens/CategoryList';
import ToursScreen from './screens/ToursScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Null from './screens/Null';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="Start" component={StartScreen} /> */}
      <Stack.Screen name="PreScreen" component={PreScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="AddTour" component={AddTourScreen} />
      <Stack.Screen name="Null" component={Null} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ToursScreen" component={ToursScreen} />
      {/* <Stack.Screen name="CategoriesList" component={CategoriesList} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} /> */}
    </Stack.Navigator>
</NavigationContainer>

}