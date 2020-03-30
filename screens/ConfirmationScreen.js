import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ContinueButton from "../components/ContinueButton"

import Colors from '../constants/Colors';

const ConfirmationScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Confirmation Screen</Text>
      <ContinueButton {...props} />
    </View>
  );
};

ConfirmationScreen.navigationOptions = {
    headerTitle: 'KITe Confirmation',
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

export default ConfirmationScreen;