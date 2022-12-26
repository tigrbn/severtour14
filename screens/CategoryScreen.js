import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
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
    <View style={styles.container} >
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
          <Text style={styles.LinkText}>{`${item.title}`}
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


const styles = StyleSheet.create({
  LinkText: {
    fontSize: 22,
    paddingTop: '10%',
    paddingBottom: '5%',
    fontWeight: 'bold',
    color: '#001B36',
    lineHeight: '22',
    left: 45,

    width: 350,
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 10,
  },
})

export default CategoryScreen;

