import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItem';
import QuantitySelector from '../../components/QuantitySelector';
import products from '../../data/products';



const HomeScreen = ({searchValue} : {searchValue: string}) => {
console.log(searchValue);

  return (
    <View style={styles.page}>


     <FlatList
     data = {products}
     renderItem={({item}) => <ProductItem item = {item} />}
     showsVerticalScrollIndicator ={false}

     />
      </View>
  );
};


const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;