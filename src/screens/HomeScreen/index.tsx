import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style = {styles.page}>
      {/*render product components */}

      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}></Image>

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines= {3} >Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          {/* ratings */}
          <Text style={styles.price}> From $13.59</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   page:{
      padding: 10
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
      fontSize: 18
  },
  price: {},

 
});

export default HomeScreen;
