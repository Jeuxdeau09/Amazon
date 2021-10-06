import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#f57542',
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartStack}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
