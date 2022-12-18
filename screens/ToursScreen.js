import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from 'react-native';
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
        setImgAddress(json.images[0]);
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
    <View>
      {isLoading ? <ActivityIndicator/> : (
         <View>
         <Text>{data.title}</Text>
         <Text >{data.description}</Text>
         <Text>{data.type_id}</Text>
         <Text>Название картинки: {imgAddress.image_name} </Text>
     </View>
        
      )}
    </View>
  );
};

export default ToursScreen;
