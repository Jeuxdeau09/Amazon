import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressScreen from '../screens/AddressScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import ProductScreen from '../screens/ProductScreen';

const Root = createNativeStackNavigator();

const  ShoppingCartStack = () => {
  return (
    <Root.Navigator >
      <Root.Screen component={ShoppingCartScreen} name="Cart" options= {{title: 'Shopping Cart '}}/>

      <Root.Screen component={AddressScreen} name="Address"  options= {{title: 'Address '}}/>

    </Root.Navigator>
  );
};

export default ShoppingCartStack;
