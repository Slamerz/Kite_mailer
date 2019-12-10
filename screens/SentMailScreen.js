import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import NewMailButton from '../components/NewMailButton';
import SentMailList from '../components/SentMailList';

const SentMailScreen = props => {
  const sentMail = useSelector(state => state.mail.sentMail);

  return (
    <SafeAreaView>
      <ScrollView>
        <SentMailList />
      </ScrollView>
      <NewMailButton {...props} />
    </SafeAreaView>
  );
};

export default SentMailScreen;
