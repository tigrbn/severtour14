

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ToursScreen from './ToursScreen';

const CategoryScreen = ({ route: { params }, navigation }) => {
 
  const { id } = params;
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);    
  getCategories = () => {
          fetch('http://194.36.191.166/api/v1/tourtypes/' + id)
            .then((response) => response.json())
            .then((json) => setCategories(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
            
      }    
    useEffect(() => {
      setLoading(true);
      getCategories();
  }, []);   
  return (
    <View style={{ padding: 20 }}>
    {isLoading ? 
    <Text>Загрузка...</Text> :
    (
        <View >
<FlatList
data={categories}
keyExtractor={({ id }) => id.toString()}
renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ToursScreen' , {paramKey: item.id} )}>
          <Text>{`${item.title}`}
          </Text>

        </TouchableOpacity>
)}
/>
</View>
    )}
</View>
  );
};

CategoryScreen.navigationOptions = {
    title: 'Category Details'
};


export default CategoryScreen;

