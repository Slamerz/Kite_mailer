import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const DraftScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Drafts</Text>
      <Button
        title="New Message"
        onPress={() => {
          props.navigation.navigate({routeName: 'CreateMail'});
        }}
      />
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
