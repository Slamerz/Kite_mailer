import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const RegistrationScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Sign Up</Text>
      <Button
        title="Submit"
        onPress={() => {
          props.navigation.navigate({routeName: 'Navigator'});
        }}
      />
    </View>
  );
};

RegistrationScreen.navigationOptions = {
  headerTitle: 'KITe Sign Up',
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

export default RegistrationScreen;
