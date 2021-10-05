import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const Root = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Root.Navigator >
      <Root.Screen component={HomeScreen} name="HomeScreen" options= {{title: 'Home'}}/>
      <Root.Screen component={ProductScreen} name="ProductDetails" />
      
    </Root.Navigator>
  );
};

export default HomeStack;
