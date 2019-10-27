import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

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
        title="Go to Yet Another Screen"
        onPress={() => {
          props.navigation.navigate({routeName: 'YetAnotherScreen'});
        }}
      />
      <Button
        title="GoBack"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

AnotherScreen.navigationOptions = {
  headerTitle: 'Another Screen',
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

export default AnotherScreen;
