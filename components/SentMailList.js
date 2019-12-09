import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SentMailItem from './SentMailItem';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const SentMailList = props => {
  return (
    <View>
      {items.map(item => (
        <SentMailItem key={item} {...props} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SentMailList;
