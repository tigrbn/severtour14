<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native'
// import SvgUri from 'react-native-svg-uri-updated';
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
  const id = route.params.paramKey;
  const getCategory = async () => {
    fetch('http://194.36.191.166/api/v1/tours/' + id + '/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      setImgAddress(json.images);
      setInfoShedules(json.schedules);
      setInfoPackages(json.packages);
      // console.log(json.images);
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    getCategory();
  }, []);
 
  // onChange = (nativeEvent) => {
  //   if(nativeEvent) {
  //     const slide = Math.ceil(native.contentOffset.x / nativeEvent.layoutMeasurement.width);
  // if (slide != imgAddress) {
  //         setImgAddress(slide);
  //     }
  //   }
  // }
  return (
    <View  style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
             
         <ScrollView style={styles.Scroll}  showsVerticalScrollIndicator={false}>           
            <SafeAreaView style={styles.Area}>           
              <ScrollView 
              onScroll={({nativeEvent}) => onChange(nativeEvent)}>
                  <FlatList 
                    data={imgAddress}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <Image 
                      resizeMode='stretch'
                      style={styles.wrap}
                      source={{uri: 'http://194.36.191.166/storage/' + item.image_name}}
                      />)}/>
              </ScrollView>
              {/* <View style={styles.wrapDot}>               
                {
                  imgAddress.map((e, index) => 
                  <Text 
                  key={e} 
                  style={imgAddress == index ? styles.dotActive : styles.dot}>
                    ●
                  </Text>)
                }
              </View> */}
              <View  style={styles.whitePanel}>
              <Text style={styles.categoryTitle}>{data.title}</Text>
              <FlatList 
                    data={infoShedules}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                    <Text style={styles.LinkText}>{`${item.price/1}`}</Text>)}/>
              {/* <FlatList 
                    data={infoShedules}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                    <Text style={styles.LinkText}>{`${item.startdate}`}</Text>)}/>
              <FlatList 
                    data={infoShedules}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                    <Text style={styles.LinkText}>{`${item.enddate}`}</Text>)}/> */}
              {/* <FlatList 
                    data={infoShedules}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                    <Text style={styles.LinkText}>{`${item.space_total}`}</Text>)}/> */}
              <FlatList 
                    data={infoShedules}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                    <Text style={styles.LinkText}>{`${item.space_current}`}</Text>)}/>
               <FlatList 
                    data={infoPackages}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                    <Text style={styles.LinkText}>{`${item.name}`}</Text>)}/>
              {/* <FlatList 
                    data={infoPackages}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
               <SvgUri
                      width="200"
                      height="200"
                      source={{ uri: 'http://194.36.191.166/storage/' + item.icon }} 
                    /> )}/> */}
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
              </View>
              
            </SafeAreaView>
     </ScrollView>
        
      )}

      
    </View>
    
  );
};

const styles = StyleSheet.create({
  whitePanel: {
    backgroundColor: 'white',
    borderRadius: 37,
    top: '-2.5%'
  },
  categoryTitle: {
    color: '#00274E',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    marginLeft: 45,
    marginTop: 45,
    width: '80%'
  },
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
      height: 300,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0
    },
    wrapDot: {
      position: 'absolute',
    
      flexDirection: 'row',
      alignSelf: 'center'
    },
    dotActive: {
      margin: 3,
      color: 'black'
    },
    dot: {
      margin: 3,
      color: 'white'
    }
})

export default ToursScreen;
=======
>>>>>>> master
