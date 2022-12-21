import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import CategoryScreen from './CategoryScreen';

const ToursScreen = ({route}) =>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [imgAddress, setImgAddress] = useState([]);
  const id = route.params.paramKey;
  const getCategory = async () => {
    fetch('http://194.36.191.166/api/v1/tours/' + id + '/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
        console.log(json);
        // setImgAddress(json.images[0]);
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  // {
  //    try {
  //     const response = await fetch('http://194.36.191.166/api/v1/tours/' + id + '/');
      
  //     console.log('http://194.36.191.166/api/v1/tours/' + id + '/')
  //     const json = await response.json();
  //     setData(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <View  style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
         <View>
         <Text style={styles.LinkText}>{data.title}</Text>
         <Text style={styles.LinkText}>{data.description}</Text>
         <Text style={styles.LinkText}>{data.type_id}</Text>
         {/* <Image source={{uri: imgAddress.image_name}}/> */}
     </View>
        
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  LinkText: {
    fontSize: 22,
    paddingTop: '10%',
    paddingBottom: '5%',
    fontWeight: 'bold',
    color: '#001B36',
    lineHeight: '22',
    left: 45,
    right: 0,
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'left',
    paddingTop: 10
  },
})

export default ToursScreen;
