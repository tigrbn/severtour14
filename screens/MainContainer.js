import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSvg from '../assets/home.svg';
import CategorySvg from '../assets/category.svg';
import PersonalSvg from '../assets/personal.svg';
import MainScreen from './MainScreen';
import PreScreen from './PreScreen';
import CategoryList from './CategoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const preScreen = "PreScreen";
const main = "MainScreen";
const categoryList = "CategoryList";

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="PreScreen" component={PreScreen}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="AddTour" component={AddTourScreen} />
    <Stack.Screen name="Null" component={Null} />
    <Stack.Screen name="CategoryList" component={CategoryList} />
    <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    <Stack.Screen name="ToursScreen" component={ToursScreen} />
  </Stack.Navigator>
</NavigationContainer>

}

export default function  MainContainer() {
  return (
    <NavigationContainer>

    <Tab.Navigator>

        <Tab.Screen name={preScreen} component={PreScreen} options={{
          tabBarIcon: ({focused}) => (
            <HomeSvg width={30} height={30}></HomeSvg>
          ),
        }} />
        <Tab.Screen name={main} component={MainScreen} options={{
          tabBarIcon: ({focused}) => (
            <CategorySvg width={30} height={30}></CategorySvg>
          ),
        }} />
        <Tab.Screen name={categoryList} component={CategoryList} options={{
          tabBarIcon: ({focused}) => (
            <PersonalSvg width={30} height={30}></PersonalSvg>
          ),
        }} />
      </Tab.Navigator>
</NavigationContainer>
  );
}





