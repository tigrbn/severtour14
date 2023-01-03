import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, CheckBox,
Image, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity,  } from 'react-native';
import { auth } from '../firebase';



const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth 
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

return (
<SafeAreaView style={styles.RegContainer}>
        <View style={styles.RegAuthCont}>
        <Text style={styles.RegMainTitleText}>Регистрация  </Text>
        {/* <Image  style={styles.LoginImage} source={require('../assets/start_pic.png')} /> */}
        </View>
        <ScrollView style={styles.RegScrollView}>
        <KeyboardAvoidingView style={styles.AuthContForm}>
        <View style={styles.LoginAuthContForm}>
        <Text style={styles.RegTitleText}>Название организации</Text>
        <TextInput placeholder='Введите название организации' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Email</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Введите электронную почту' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Контактный телефон </Text>
        <TextInput placeholder='Введите номер телефона' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Пароль </Text>
        <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Ваш пароль, не менее 8 символов' style={styles.RegPlaceholderText}/>
        <Text style={styles.RegTitleText}>Подтвердите пароль </Text>
        <TextInput value={password} onChangeText={text => setPassword(text)} placeholder='Повторите пароль' style={styles.RegPlaceholderText}/>
        </View>
        </KeyboardAvoidingView>
        <Text style={styles.RegInfoText}>Нажимая кнопку «Зарегистрироваться»:</Text>
        <View style={styles.checkboxContainer}>
        <Text style={styles.agreeText}>Вы принимаете условия {'\n'}
Пользовательского соглашения {'\n'}
и даю своё согласие на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.</Text>
      </View>

        <View style={styles.RegP5} >
        <TouchableOpacity style={styles.RegR} onPress={handleSignUp}>
        <Text style={styles.RegAuth}>
            Зарегистрироваться </Text>
        </TouchableOpacity>
        </View>
     </ScrollView>
</SafeAreaView>
)
}


const styles = StyleSheet.create({
  RegContainer: {
    flex: 1,
    flexDirection:'column',
  },
  RegScrollView: {
    backgroundColor: 'white',
    borderRadius: 37,
    top: '-5%',
    width: '100%'
  },
  RegAuthCont: {
    backgroundColor: '#0053A9',
    height: 300
  },
  RegMainTitleText: {
    fontFamily: 'mt-bold',
    fontWeight: 'bold',
    fontSize: 35,
    left: 45,
    color: 'white',
    top: '50%'
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
    lineHeight: 22,
    left: 45,
    fontFamily: 'mt-bold',
  },
  RegP5: {paddingTop: '5%'},
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
    alignSelf: 'flex-start',
    backgroundColor: '#ECBE00',
    width: '80%',
    borderRadius: 37,
    height: 50
  },
  RegAuth: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    top: 15
  },
  RegInfoText: {
    color: '#ADADAD',
    fontSize: 14,
    left: 45,
    fontWeight: '400',
    textAlign: 'left',
    paddingTop: '10%'
  },
  agreeText: {
    paddingTop: '5%',
    fontSize: 13,
    lineHeight: 16,
    left: 45,
    width: '80%'
  },
});

export default RegisterScreen