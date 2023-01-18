import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PreScreen from "./screens/PreScreen";
import HomeSvg from "./assets/home.svg";
import CategorySvg from "./assets/category.svg";
import PersonalSvg from "./assets/personal.svg";
import MainScreen from "./screens/MainScreen";
import StartScreen from "./screens/MainScreen";
import CategoryList from "./screens/CategoryList";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddTourScreen from "./screens/AddTourScreen";
import ToursScreen from "./screens/ToursScreen";

import Null from "./screens/Null";
import CategoryScreen from "./screens/CategoryScreen";

const Stack = createNativeStackNavigator();
const main = "MainScreen";
const categoryList = "CategoryList";
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} options={{ title: "Главная" }}/>
      {/* <Stack.Screen name="PreScreen" component={PreScreen} options={{ title: "Демо меню" }}/> */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Авторизация" }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Регистрация" }}/>
      <Stack.Screen name="AddTour" component={AddTourScreen} options={{ title: "Добавить тур" }}/>
      <Stack.Screen name="Null" component={Null} options={{ title: "Стартовая страница" }}/>
      <Stack.Screen name="CategoryList" component={CategoryList} options={{ title: "Категории" }}/>
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="ToursScreen" component={ToursScreen} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
  );
}

export default function App() {
  const screenOptions = {
    unmountOnBlur: false,
    // headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      elevation: 0,
      backgroundColor: "#fff",
      height: 100,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      ...styles.shadow,
    },
  };

  // показывать, если пользователь открывает в первый (!) раз приложение
  const [isFirstLaunch, setIsFirsLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirsLaunch(true);
      } else {
        setIsFirsLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return <StartScreen />;
  } else {
    return (
      <NavigationContainer 
      >
        <Tab.Navigator {...{ screenOptions }}>
          <Tab.Screen
            name="HomeStackScreen"
            component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View>
                  {/* <Image
                    source={require("./assets/personal.png")}
                    resizeMode="contain"
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: focused ? "#0053A9" : "rgba(0, 83, 169, 0.5)",
                    }}
                  /> */}
                               <Image
                    source={require("./assets/home.png")}
                    resizeMode="contain"
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: focused ? "#0053A9" : "rgba(0, 83, 169, 0.5)",
                    }}
                  />
                </View>
              ),
              headerShown: false,
            }}
          />
          {/* <Tab.Screen
            name={main}
            component={MainScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View>
              <Image
                    source={require("./assets/home.png")}
                    resizeMode="contain"
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: focused ? "#0053A9" : "rgba(0, 83, 169, 0.5)",
                    }}
                  />
                </View>
              ),
            }}
          /> */}
          {/* <Tab.Screen
            name={categoryList}
            component={CategoryList}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View>
                  <Image
                    source={require("./assets/category.png")}
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                      tintColor: focused ? "#0053A9" : "rgba(0, 83, 169, 0.5)",
                    }}
                  />
                </View>
              ),
              title: "Категории",
            }}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
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
    shadowColor: "#0053A9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
});
