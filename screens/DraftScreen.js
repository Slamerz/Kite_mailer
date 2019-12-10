import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import NewMailButton from '../components/NewMailButton';

import Colors from '../constants/Colors';

const DraftScreen = props => {
  const drafts = useSelector(state => state.mail.drafts);

  return (
    <View style={styles.screen}>
      <Text>Drafts</Text>
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

export default DraftScreen;
