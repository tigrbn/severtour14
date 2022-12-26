import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, CheckBox,
Image, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity,  } from 'react-native';


export default function PreScreen( { navigation }) {
    const loadScene = () => {
        navigation.navigate('Main');
      }

      const loadScene1 = () => {
        navigation.navigate('Login');
      }

      const loadScene2 = () => {
        navigation.navigate('Register');
      }

      const loadScene3 = () => {
        navigation.navigate('Null');
      }

      const loadScene4 = () => {
        navigation.navigate('CategoryList');
      }

      const loadScene5 = () => {
        navigation.navigate('AddTour');
      }

return (
<TouchableOpacity style={styles.container}>
        <Text onPress={loadScene} style={styles.LinkText}>
        Главная страница 
        </Text>
        <Text onPress={loadScene1} style={styles.LinkText}>
        Авторизация
        </Text>
        <Text onPress={loadScene2} style={styles.LinkText}>
        Регистрация
        </Text>
        <Text onPress={loadScene3} style={styles.LinkText}>
        Стартовая страница
        </Text>
        <Text onPress={loadScene4} style={styles.LinkText}>
        Категории туров
        </Text>
        <Text onPress={loadScene5} style={styles.LinkText}>
        Добавить тур
        </Text>
</TouchableOpacity>
        

)

}


const styles = StyleSheet.create({
  LinkText: {
    fontSize: 18,
    paddingTop: '10%',
    paddingBottom: '5%',
    fontWeight: 'bold',
    color: '#001B36',
    lineHeight: '22',
    left: 45,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'left',
    paddingTop: 10
  },
  
});

