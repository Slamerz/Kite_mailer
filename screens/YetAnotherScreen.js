import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AnotherScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Another Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          props.navigation.navigate({routeName: 'Home'});
        }}
      />
      <Button
        title="GoBack"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title="Back to Home"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
