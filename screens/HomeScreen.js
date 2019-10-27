import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Another Screen"
        onPress={() => {
          props.navigation.navigate({routeName: 'Another'});
        }}
      />
      <Button
        title="Go to Login"
        onPress={() => {
          props.navigation.navigate({routeName: 'LoginScreen'});
        }}
      />
      {/* <Button
        title="GoBack"
        onPress={() => {
          props.navigation.goBack();
        }}
      /> */}
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
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

export default HomeScreen;
