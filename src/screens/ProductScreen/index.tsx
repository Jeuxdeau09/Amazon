import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import Buttons from '../../components/Button';
import QuantitySelector from '../../components/QuantitySelector';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  console.log(route.params);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}

      <ImageCarousel images={product.images} />

      {/* Option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price*/}
      <Text style={styles.price}>
        From ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice} </Text>
        )}
      </Text>

      {/* Description*/}

      <Text style={styles.description}>{product.description}</Text>

      {/* QTY selector*/}

      <QuantitySelector Quantity={quantity} setQuantity={setQuantity} />

      {/* Buttons*/}
      <Buttons
        text={'Add to cart'}
        onPress={() => console.warn('add to cart')}
      />

      <Buttons text={'Buy Now'} onPress={() => console.warn('buy now')} />
    </ScrollView>
  );
};

export default ProductScreen;
