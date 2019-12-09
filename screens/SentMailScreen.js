import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
// import NewMailButton from '../components/NewMailButton';
import SentMailItemExpanded from '../components/SentMailItemExpanded';
import SentMailItem from '../components/SentMailItem';
import SentMailList from '../components/SentMailList';
// import Colors from '../constants/Colors';

const SentMailScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SentMailList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default SentMailScreen;
