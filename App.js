import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PreScreen from './screens/PreScreen';
import HomeSvg from './assets/home.svg';
import CategorySvg from './assets/category.svg';
import PersonalSvg from './assets/personal.svg';
import MainScreen from './screens/MainScreen';
import CategoryList from './screens/CategoryList';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AddTourScreen from './screens/AddTourScreen';
import ToursScreen from './screens/ToursScreen';

import Null from './screens/Null';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createNativeStackNavigator();
const main = "MainScreen";
const categoryList = "CategoryList";
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return <Stack.Navigator>
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

}

export default function App() {
  const screenOptions = {
    unmountOnBlur: false,
    // headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle:{
      position: 'absolute',
      bottom: 35,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: '#fff',
      borderRadius: 44,
      height: 90, 
      ...styles.shadow
    },
  };

  // показывать, если пользователь открывает в первый (!) раз приложение
  const [isFirstLaunch, setIsFirsLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirsLaunch(true);
      } else {
        setIsFirsLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <StartScreen/>
    );
  } else {
      return  <NavigationContainer>
      <Tab.Navigator {...{ screenOptions }}>
          <Tab.Screen   
            name="HomeStackScreen" 
            component={HomeStackScreen} 
            options={{
            tabBarIcon: ({focused}) => (
             <View>
              <Image
              source={require('./assets/home.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                top: 15,
                tintColor: focused ? '#0053A9' : 'rgba(0, 83, 169, 0.5)'
              }}
              />
             </View>
            ), headerShown: false
          }} />
          <Tab.Screen name={main} component={MainScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
              <Image
              source={require('./assets/personal.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                top: 15,
                tintColor: focused ? '#0053A9' : 'rgba(0, 83, 169, 0.5)'
              }}
              />
             </View>
            ), 
          }} />
          <Tab.Screen name={categoryList} component={CategoryList} options={{
            tabBarIcon: ({focused}) => (
              <View>
              <Image
              source={require('./assets/category.png')}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
                top: 15,
                tintColor: focused ? '#0053A9' : 'rgba(0, 83, 169, 0.5)'
              }}
              />
             </View>
            ),  title: 'Категории'
          }} />
        </Tab.Navigator>
  </NavigationContainer>
  
  }



  
}


// async function loadAppAplication() {
//   await Font.loadAsync({
//     'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
//     'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
//   });
// }

// export function fontsApp() {
//   const [isReady, setIsReady] = useState(false);

//   if (!isReady) {
//     return (
//       <AppLoading 
//         startAsync={loadAppAplication} 
//         onError={err => console.log(err)}
//         onFinish={() => setIsReady(true)}
//       />
//     )
//   }

//   return (
//     <MainStack />
//   );
// }

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#0053A9',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
})