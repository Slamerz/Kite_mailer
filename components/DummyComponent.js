import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Colors from '../constants/Colors';

const DummyComponent = props => {
  return (
    <View style={styles.dummy}>
      <View style={styles.button}>
        <Button title="BUTTON" color={Colors.secondary} onPress={() => {}} />
      </View>
      <View style={styles.button}>
        <Button title="BUTTON" color={Colors.secondary} onPress={() => {}} />
      </View>
      <View style={styles.button}>
        <Button title="BUTTON" color={Colors.secondary} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dummy: {
    height: 30,
    width: 150,
  },
  button: {
    borderColor: 'brown',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default DummyComponent;
