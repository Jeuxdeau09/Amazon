import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Buttons = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    height: 35,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },

  text: {
    fontSize: 16,
  },
});

export default Buttons;
