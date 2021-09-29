/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Buttons from '../../components/Button';

import products from '../../data/cart';
import product from '../../data/product';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length})items: {''}
          <Text style={{color: '#e47911'}}>${totalPrice.toFixed(2)}</Text>
        </Text>

        <Buttons
          text="Proceed to checkout"
          onPress={() => console.warn('Go to Checkout')}
          containerStyle={{backgroundColor: '#f5da42', borderColor: '#c7b702'}}
        />
      </View>

      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
