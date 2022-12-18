import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CategoryScreen from './CategoryScreen';

const Categories  = ({ navigation: { navigate } }) =>  {    
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);    
    getCategories = () => {
        fetch('http://194.36.191.166/api/v1/tourtypes/')
          .then((response) => response.json())
          .then((json) => setCategories(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
          
    }    
    useEffect(() => {
        setLoading(true);
        getCategories();
    }, []);    
    return(
      
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
            onPress={() => navigate('CategoryScreen', { id: item.id })}> 
            <Text>{`${item.name}`}
            </Text>

          </TouchableOpacity>
        )}
      />
    </View>
            )}
        </View>
    );
};

export default Categories;