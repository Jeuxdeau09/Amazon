import React from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import Feather from 'react-native-vector-icons/Feather';

import {useState} from 'react';

const Root = createNativeStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />

        <TextInput
          style={{height: 50}}
          placeholder="Search"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Root.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Root.Screen
        name="HomeScreen"
        options={{title: 'Home'}}>
        {() => <HomeScreen />} 
      </Root.Screen>
      <Root.Screen component={ProductScreen} name="ProductDetails" />
    </Root.Navigator>
  );
};

export default HomeStack;
