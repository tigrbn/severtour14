import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import StartScreen from './screens/StartScreen';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator()

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
      <PaperProvider>
        <NavigationContainer>
          <Routes.Navigator>
            <Routes.Screen name="Start" component={StartScreen} />
            <Routes.Screen name="Login" component={LoginScreen} />
            <Routes.Screen name="Register" component={RegisterScreen} />
          </Routes.Navigator>
      </NavigationContainer>
      </PaperProvider>
    );
  } else {
      return <LoginScreen/>
  }
}


async function loadAppAplication() {
  await Font.loadAsync({
    'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
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
