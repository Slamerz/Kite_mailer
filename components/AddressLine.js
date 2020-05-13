import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddressLine = props => {
  return (
    <View style={styles.line}>
      <Text style={styles.text}>{props.line}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: 150,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 3,
  },
  text: {
    fontSize: 8,
  },
});

export default AddressLine;
