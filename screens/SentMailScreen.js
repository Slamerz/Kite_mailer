import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import NewMailButton from '../components/NewMailButton';
import SentMailList from '../components/SentMailList';

const SentMailScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SentMailList />
      </ScrollView>
      <NewMailButton {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SentMailScreen;
