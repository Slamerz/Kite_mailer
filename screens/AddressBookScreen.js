import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewMailButton from '../components/NewMailButton';

const AddressBookScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>AddressBook</Text>
      <NewMailButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddressBookScreen;
