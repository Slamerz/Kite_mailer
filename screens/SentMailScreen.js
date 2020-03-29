import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import NewMailButton from '../components/NewMailButton';
import AddressMailButton from "../components/AddressMailButton"
import SentMailList from '../components/SentMailList';

const SentMailScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SentMailList />
      </ScrollView>
      <AddressMailButton {...props} />
    </SafeAreaView>
  );
};

export default SentMailScreen;
