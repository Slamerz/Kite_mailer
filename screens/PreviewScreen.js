import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckoutButton from "../components/CheckoutButton"

const PreviewScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>PreviewScreen</Text>
      <CheckoutButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PreviewScreen;