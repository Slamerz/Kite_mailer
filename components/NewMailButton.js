import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';

import Colors from '../constants/Colors';

const NewMailButton = props => {
  return (
    <View style={styles.button}>
      <Button
        transparent
        title="New Message"
        onPress={() => {
          props.navigation.navigate({routeName: 'CreateMail'});
        }}>
        <Icon name="md-create" style={styles.icon} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 430,
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

export default NewMailButton;
