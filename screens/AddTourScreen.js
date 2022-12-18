import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, CheckBox,
  Image, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity,  } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function AddScreen () {
  
  return (
<View  style={styles.RegContainer}>
        <ScrollView style={styles.RegScrollView}>
        <View style={styles.LoginAuthContForm}>
        <Text style={styles.RegTitleText}>Регион тура</Text>
        <TextInput placeholder='Республика Саха (Якутия)' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Вид тура</Text>
        <TextInput  onChangeText={text => setEmail(text)} placeholder='Сплав' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Длительность </Text>
        <TextInput placeholder='3 дня' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Размещение </Text>
        <TextInput  onChangeText={text => setPassword(text)} placeholder='Палатки' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Питание </Text>
        <TextInput  onChangeText={text => setPassword(text)} placeholder='Походное: готовит гид' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Размер группы</Text>
        <TextInput  onChangeText={text => setEmail(text)} placeholder='от 6 человек' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Место сбора </Text>
        <TextInput placeholder='Автовокзал, г.Якутск ' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Время сбора </Text>
        <TextInput  onChangeText={text => setPassword(text)} placeholder='Укажите время' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Описание </Text>
        <TextInput  onChangeText={text => setPassword(text)} placeholder='Напишите кратко о туре' style={styles.RegPlaceholderText}/>
        <TouchableOpacity style={styles.RegR} >
        <Text style={styles.RegAuth}>
            Отправить </Text>
        </TouchableOpacity>
        </View>
     </ScrollView>
</View >
  );
}

const styles = StyleSheet.create({
  RegContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',

  },
  RegScrollView: {
    height:'100%', 
    width:'100%',
    flex: 1,
  },
  LoginAuthContForm: {
    top: 25
  },

  RegR: {
    borderRadius: 37,
  },
  RegTitleText: {
    fontSize: 18,
    paddingTop: '10%',
    paddingBottom: '5%',
    fontWeight: 'bold',
    color: '#001B36',
    lineHeight: '22',
    left: 45,
    fontFamily: 'mt-bold',
  },

  RegPlaceholderText: {
    left: 45,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ADADAD',
    paddingBottom: 10,
    width: '80%'
  },
  RegR: {
    left: 45,
    alignSelf: 'left',
    backgroundColor: '#ECBE00',
    width: '80%',
    borderRadius: 37,
    height: 50,
    top: 40,
  },
  RegAuth: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    top: 15
  },
});

export default AddScreen;