import React from 'react';
import { Text, View } from 'react-native';
import Categories from './Categories';

const CategoryScreen = props => {
    return (
        <Categories navigation={props.navigation} />
    );
};

CategoryScreen.navigationOptions = {
    title: 'Category List'
};
export default CategoryScreen;