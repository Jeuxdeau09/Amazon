import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Buttons from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('invalid address');
  const [city, setCity] = useState('');
  const [states, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('fix all field errors');
      return;
    }

    //if full name is empty
    if (!fullname) {
      Alert.alert('Please fill in full name field');
      return;
    }

    if (!phone) {
      Alert.alert('please enter phone number');
    }
    console.warn('Success!');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}> Full name (First and Last name) </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={fullname}
            onChangeText={setFullname}
          />

          <View style={styles.row}>
            <Text style={styles.label}> Phone Number </Text>
            <TextInput
              style={styles.input}
              placeholder="Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType={'phone-pad'}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}> Address </Text>
            <TextInput
              style={styles.input}
              placeholder="Street Address or Po Box"
              value={address}
              onEndEditing={validateAddress}
              onChangeText={text => {
                setAddress(text);
                setAddressError('');
              }}
            />

            {!!addressError && (
              <Text style={styles.errorLabel}> {addressError} </Text>
            )}
          </View>

          <View style={styles.row}>
            <Text style={styles.label}> City </Text>
            <TextInput
              style={styles.input}
              placeholder="Street Address or Po Box"
              value={city}
              onChangeText={setCity}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}> State </Text>
            <TextInput
              style={styles.input}
              placeholder="state"
              value={states}
              onChangeText={setState}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}> Zipcode </Text>
            <TextInput
              style={styles.input}
              placeholder="zipcode"
              value={zipcode}
              onChangeText={setZipcode}
            />
          </View>

          <Buttons text={'Use this Address'} onPress={onCheckout} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
