/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/*render product components */}

      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
        />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          {/* ratings */}
          <View style={styles.ratingsContainer}>
            <FontAwesome style = {styles.star} name="star" size={18} color={'e47911'} />
            <FontAwesome style = {styles.star} name="star" size={18} color={'e47911'} />
            <FontAwesome style = {styles.star} name="star" size={18} color={'e47911'} />
            <FontAwesome style = {styles.star} name="star-half-full" size={18} color={'e47911'} />
            <FontAwesome style = {styles.star} name="star-o" size={18} color={'e47911'} />

            <Text> 13,032</Text>
          </View>

          <Text style={styles.price}>
             From $13.59
          <Text style= {styles.oldPrice}> $16.22 </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },

  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },

  rightContainer: {
    padding: 10,
    flex: 3,
  },

  title: {
    fontSize: 18,
  },
  price: {},

  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical : 5,
  },

  star: {
    margin: 2,
    color: 'orange',
  },

  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 5 ,
    textDecorationLine: 'line-through',
  },
});

export default HomeScreen;
