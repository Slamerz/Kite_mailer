import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const Input = props => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      {...props}
      style={{...styles.input, ...props.style}}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 190,
    borderRadius: 30,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: Colors.secondary,
    fontSize: 20,
    paddingLeft: 25,
  },
});

export default Input;
