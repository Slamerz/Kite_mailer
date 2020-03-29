import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import NewMailButton from '../components/NewMailButton';

import CreateMailButton from "../components/CreateMailButton"

const AddressFormScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>AddressForm</Text>
      <CreateMailButton {...props} />
      {/* <NewMailButton {...props} /> */}
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

export default AddressFormScreen;