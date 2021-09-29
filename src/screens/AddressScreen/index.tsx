import React ,{useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';

const countries = countryList.getData();

const AddressScreen = () => {

const [country, setCountry] =useState('');

  return (
    <View>
      <View style={styles.row}>
        <Picker
        selectedValue = {country}
        onValueChange = {setCountry}
        >
          {countries.map(country => (
            <Picker.Item value={country.code} label={country.name} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default AddressScreen;
