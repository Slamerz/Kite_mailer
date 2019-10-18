/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import AppHeader from './components/Header';
// import Start from './Start';

const App: () => React$Node = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppHeader menuButtonClick={handleMenuClick} menuOpen={menuOpen} />

      {menuOpen && (
        <View style={styles.dummy}>
          <Button title="BUTTON"></Button>
          <Button title="BUTTON"></Button>
          <Button title="BUTTON"></Button>
        </View>
      )}
      {/* <Start /> */}
    </>
  );
};

const styles = StyleSheet.create({
  dummy: {
    height: 30,
    width: 150,
    backgroundColor: 'red',
  },
});

export default App;
