import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';

import Colors from '../constants/Colors';

const ContinueButton = props => {
  return (
    <View style={styles.button}>
      <Button
        transparent
        title="Continue"
        onPress={() => {
          props.navigation.navigate({routeName: 'Navigator'});
      }}>
        <Icon name="md-return-left" style={styles.icon} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 490,
    left: 320,
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  icon: {
    fontSize: 50,
    color: Colors.secondary,
  },
});

export default ContinueButton;