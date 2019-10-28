import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NewMailButton from '../components/NewMailButton';

import Colors from '../constants/Colors';

const DraftScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Drafts</Text>
      <NewMailButton {...props} />
      {/* <Button
        title="New Message"
        onPress={() => {
          props.navigation.navigate({routeName: 'CreateMail'});
        }}
      /> */}
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
