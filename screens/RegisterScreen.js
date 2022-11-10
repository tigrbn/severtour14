import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, 
Image, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';



function RegisterScreen ({ navigation }) {
//     const navigation = useNavigation(); 
//   const [phone, setPhone] = useState('')

//   const handleSignUp = () => {
//     auth
//     .createUserWithPhone(phone)
//     .then(userCredentials => {
//       const user = userCredentials.user;
//       console.log(user.phone);
//     })
//     .catch(error => alert(error.message))
//   }
return (
<SafeAreaView style={styles.LoginContainer}>
    <View style={styles.LoginScrollView}>
        <View style={styles.LoginAuthCont}>
            <Text style={styles.LoginTitleText}>
            Авторизация {'\n'} </Text>
        {/* <Image  style={styles.LoginImage} source={require('../assets/start_pic.png')} /> */}
        </View>
        <KeyboardAvoidingView style={styles.AuthContForm}>
        <View style={styles.LoginAuthContForm}>
        <Text style={styles.LoginInfoText}> Войти по номеру {'\n'} телефона </Text>
        <TextInput value={phone} onChangeText={text => setPhone(text)} placeholder='Введите номер телефона' style={styles.LoginPlaceholderText}/>
            <Text style={styles.startTitleText}>
          </Text>
        </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.BtnLogin} onPress={(handleSignUp) => {}}>
        <Text style={styles.BtnLoginText}>
            Войти {'\n'} </Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.RegText}>
        У Вас нет аккаунта? {'\n'}
Зарегистрируйтесь 
<TouchableOpacity  onPress={() => {}}>
        <Text style={styles.BtnRegText}>
        здесь {'\n'} </Text>
        </TouchableOpacity>
 </Text>
        <TouchableOpacity style={styles.BtnLogin} onPress={() => {}}>
        <Text style={styles.BtnLoginText}>
            Войти {'\n'} </Text>
        </TouchableOpacity>
        </View>
     </View>
</SafeAreaView>
)
}

const styles = StyleSheet.create({

  LoginInfoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#001B36',
    lineHeight: '27',
    left: 45,
    top: '100%',
    fontFamily: 'mt-bold',
  },
  LoginPlaceholderText: {
    left: 45,
    top: '125%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ADADAD',
    paddingBottom: 10,
    width: '80%'
  },
  BtnLogin: {
    left: 45,
    top: '15%',
    alignSelf: 'left',
    backgroundColor: '#ECBE00',
    width: '80%',
    padding: 5,
    borderRadius: 50,
  },
  BtnLoginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    top: 9
  },
  BtnRegText: {
    color: '#ECBE00',
    fontSize: 18,
    top: 24,
    left: 5
  },

  RegText: {
    color: '#001B36',
    textAlign: 'center',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    top: '150%'
  },
  LoginContainer: {
    flex: 1,
    flexDirection:'column',
  },
  LoginAuthCont: {
    backgroundColor: '#0053A9',
    height: '55%',
  },
  LoginAuthContForm: {
    backgroundColor: 'white',
    borderRadius: 37,
    top: '-50%',
    width: '100%'

  },
  // LoginImage: {
  //   width: '100%',
  //   opacity: '0.2',
  //   zIndex: '-1',
  //   position: 'relative'
    
  // },
  LoginTitleText: {
    fontFamily: 'mt-bold',
    fontWeight: 'bold',
    fontSize: 35,
    left: 45,
    color: 'white',
    top: '50%'
  },
});

export default RegisterScreen