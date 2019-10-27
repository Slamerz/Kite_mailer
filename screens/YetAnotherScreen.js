import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const YetAnotherScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Yet Another Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          props.navigation.navigate({routeName: 'Home'});
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

YetAnotherScreen.navigationOptions = {
  headerTitle: 'Yet Another Screen',
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

export default YetAnotherScreen;
