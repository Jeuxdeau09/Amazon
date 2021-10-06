import React from 'react';
import {SafeAreaView} from 'react-native';
import Buttons from '../../components/Button';
import Auth from '@aws-amplify';

const MenuScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };

  return (
    <SafeAreaView>
      <Buttons text="Sign Out" onPress={onLogout} />
    </SafeAreaView>
  );
};

export default MenuScreen;
