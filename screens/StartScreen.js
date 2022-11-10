import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Svg, { Path } from "react-native-svg";


function StartScreen ({ navigation }) {
return (
  <SafeAreaView style={styles.startView}>
    <Image  style={styles.start_image} source={require('../assets/start_pic.png')} />
    <View>
    <Text style={styles.startTitleText}>
      СЕВЕР {'\n'} </Text>
      <Text style={styles.startBottomText}>
      Якутия – дикий и неповторимый по своей красоте северный край. 
      Это край резких контрастов. Край двух сезонов. </Text>
        <Button  style={styles.start_button} mode="contained" onPress={() => navigation.replace('Main')}>
        <Text  style={styles.startBtnText}> Начать </Text>
              <Svg style={styles.startSvg} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.08547 7.43221C9.19522 7.54191 9.28229 7.67223 9.34171 7.81571C9.40112 7.95919 9.4317 8.113 9.4317 8.26834C9.4317 8.42368 9.40112 8.57749 9.34171 8.72097C9.28229 8.86445 9.19522 8.99477 9.08547 9.10447L2.01439 16.1903C1.79309 16.4121 1.49295 16.5367 1.18 16.5367C0.867043 16.5367 0.566904 16.4121 0.345611 16.1903C0.124317 15.9686 -4.49813e-06 15.6678 -4.48445e-06 15.3542C-4.47077e-06 15.0406 0.124317 14.7398 0.345611 14.5181L6.58466 8.26834L0.345611 2.0186C0.124318 1.79685 -3.87996e-06 1.49608 -3.86628e-06 1.18247C-3.8526e-06 0.86886 0.124318 0.568093 0.345612 0.346337C0.566905 0.124581 0.867043 -3.75156e-07 1.18 -3.61448e-07C1.49296 -3.47739e-07 1.79309 0.124581 2.01439 0.346337L9.08547 7.43221Z" fill="white"/>
             </Svg>   
        </Button>
      </View>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  startView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  start_image: {
    width: 400,
    height: 430,
    top: 15,
  },
  start_button: {
    flexDirection: 'column',
    fontFamily: 'mt-regular',
    backgroundColor: '#0053A9',
    borderRadius: '25',
    width: 180,
    height: 50,
    justifyContent: 'center',
    top: 85,
    alignSelf: "flex-start",
    left: 45,
  },
  startSvg: {
  },
  startBtnText: {
    fontSize: 16, 
    textTransform: 'capitalize',
  },
  startTitleText: {
    fontFamily: 'mt-bold',
    fontWeight: 'bold',
    fontSize: 35,
    width: '100%',
    left: 45,
    top: 55,
    color: "#001B36",
  },
  startBottomText: {
    fontFamily: 'mt-regular',
    fontWeight: 'light',
    fontSize: 16,
    lineHeight: 26,
    width: '80%',
    left: 45,
    top: 35,
    alignSelf: "flex-start",
    color: '#001B36',
    textAlign: 'left',
  }
  
  
});

export default StartScreen