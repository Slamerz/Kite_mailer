import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import NewMailButton from '../components/NewMailButton';

import Colors from '../constants/Colors';

const SentMailScreen = props => {
  const sentMail = useSelector(state => state.mail.sentMail);

  return (
    <View style={styles.screen}>
      <Text>Sent Mail</Text>
      <NewMailButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SentMailScreen;
