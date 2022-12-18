import React, { useEffect } from 'react';
// import { StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MainStack from './navigate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartScreen from './screens/StartScreen';


// const Stack = createNativeStackNavigator()

export default function App() {
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
      return <MainStack/>
  }
}


async function loadAppAplication() {
  await Font.loadAsync({
    'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
}

export function fontsApp() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadAppAplication} 
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
    <MainScreen />
  );
}

