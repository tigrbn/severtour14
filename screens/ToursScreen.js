import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native'

import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { color, onChange } from 'react-native-reanimated';
import CategoryScreen from './CategoryScreen';

  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  
  const ToursScreen = ({route}) =>{

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [imgAddress, setImgAddress] = useState([]);
  const [infoShedules, setInfoShedules] = useState([]);
  const [infoPackages, setInfoPackages] = useState([]);
  const images = [
    'http://194.36.191.166/storage/' + imgAddress.image_name,
    'http://194.36.191.166/storage/' + imgAddress.image_name,
      ]


  const id = route.params.paramKey;
  const getCategory = async () => {
    fetch('http://194.36.191.166/api/v1/tours/' + id + '/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
        console.log(json);
        setImgAddress(json.images[0]);
        setInfoShedules(json.schedules[0]);
        setInfoPackages(json.packages[0]);
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    getCategory();
  }, []);
 

  return (
    <View  style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
             
         <ScrollView style={styles.Scroll}  showsVerticalScrollIndicator={false}>
     
            
            <SafeAreaView style={styles.Area}>
              <ScrollView 
              // onScroll={({nativeEvent}) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}>
                {
                  images.map((e, index) =>
                  <Image 
                  key={e}
                  resizeMode='stretch'
                  style={styles.wrap}
                  source={{uri: e}}
                  />
                  )
                }
              </ScrollView>

              {/* <View style={styles.wrapDot}>
                {
                  images.map((e, index) => 
                  <Text 
                  key={e} 
                  style={imgActive == index ? styles.dotActive : styles.dot}>
                    ●
                  </Text>)
                }
              </View> */}
              
              <Text style={styles.LinkText_}>Название</Text>
              <Text style={styles.LinkText}>{data.title}</Text>
              <Text style={styles.LinkText_}>Размещение:</Text>
              <Text style={styles.LinkText}>{data.accommodation}</Text>
              <Text style={styles.LinkText_}>Место сбора:</Text>
              <Text style={styles.LinkText}>{data.place}</Text>
              <Text style={styles.LinkText_}>Описание:</Text>
              <Text style={styles.LinkText__}>{data.description}</Text>
              <View style={styles.price_container}>
              <Text style={styles.price}>{infoShedules.price} ₽ {'\n'}
              <Text style={styles.price_text}>с человека</Text>
              </Text>
              <Button style={styles.zabron}>
              <Text style={styles.zabron_text}>
              Забронировать</Text></Button>
              </View>
            </SafeAreaView>
     </ScrollView>
        
      )}

      
    </View>
    
  );
};

const styles = StyleSheet.create({
  LinkText: {
    fontSize: 20,
    paddingTop: '5%',
    color: '#001B36',
    lineHeight: '26',
    left: 45,
    right: 0,
    width: 350,
  },
//   Scroll: {
//     paddingBottom: 150,
//     overflow: 'hidden'
//  },
  // Area: {
  //   height: '100%',
  //   width: '100%',
  //   left: 0,
  //   right: 0,
  //   overflow: 'hidden'
  // },
    LinkText_: {
      fontSize: 22,
      paddingTop: '10%',
      paddingBottom: 0,
      fontWeight: 'bold',
      color: '#001B36',
      lineHeight: '22',
      left: 45,
      right: 0,
      width: 380,
    },
    zabron: {
      backgroundColor: '#ECBE00', 
      marginTop: '10%',
      marginBottom: 150,
      right: 0,
      color: 'white',
      borderRadius: 28,
      padding: 10,
      left: '5%'
    },
    zabron_text: {
      color: 'white',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      fontSize: 18
    },
    LinkText__: {
      fontSize: 22,
      paddingTop: '5%',
      color: '#001B36',
      lineHeight: '30',
      left: 45,
      right: 0,
      width: 300,
    },
    price: {
      fontWeight: '700',
      fontSize: 25,
      color: '#00274E',
      marginTop: '10%',
      marginBottom: 150,
      left: 5,
    },
    price_text: {
      fontSize: 22,
    },
    container: {
      backgroundColor: 'white',
      alignItems: 'flex-start',
      paddingTop: 10,
      // height: '100%',
    },
    price_container: {
      flex: 1,
      alignItems: "center", // ignore this - we'll come back to it
      justifyContent: "center", // ignore this - we'll come back to it
      flexDirection: "row",
    },
    img: {
      left: 25,
      alignSelf: 'center',
      paddingTop: 10,
      width: 300,
      height: 300,
    },
    wrap: {
      width: WIDTH,
      height: HEIGHT * 0.35,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0
    },
    // wrapDot: {
    //   position: 'absolute',
    
    //   flexDirection: 'row',
    //   alignSelf: 'center'
    // },
    // dotActive: {
    //   margin: 3,
    //   color: 'black'
    // },
    // dot: {
    //   margin: 3,
    //   color: 'white'
    // }
})

export default ToursScreen;
