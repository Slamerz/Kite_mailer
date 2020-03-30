import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SendMailButton from '../components/SendMailButton'

import Colors from '../constants/Colors';
import { Button } from 'native-base';

const CheckoutScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Checkout Screen</Text>
      <SendMailButton {...props} />
    </View>
  );
};

CheckoutScreen.navigationOptions = {
    headerTitle: 'KITe Checkout',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.secondary,
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default CheckoutScreen;