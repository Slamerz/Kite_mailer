import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Another Screen"
        onPress={() => {
          props.navigation.navigate({routeName: 'Another'});
        }}
      />
      {/* <Button
        title="GoBack"
        onPress={() => {
          props.navigation.goBack();
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

export default HomeScreen;
