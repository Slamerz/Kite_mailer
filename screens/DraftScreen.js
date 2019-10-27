import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const DraftScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Drafts</Text>
      <Button
        title="Sent"
        onPress={() => {
          props.navigation.navigate({routeName: 'SentMailScreen'});
        }}
      />
    </View>
  );
};

DraftScreen.navigationOptions = {
  headerTitle: 'KITe Drafts',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.secondary,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DraftScreen;
