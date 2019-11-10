import React from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const SettingsButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.secondary}
    />
  );
};

// const styles = StyleSheet.create({});

export default SettingsButton;
