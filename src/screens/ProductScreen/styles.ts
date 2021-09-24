import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 15,
    backgroundColor: 'white',
  },

  title: {
  
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 5,
    textDecorationLine: 'line-through',
  },

  description: {
    marginVertical: 15,
    lineHeight:20
  },
});

export default styles;
