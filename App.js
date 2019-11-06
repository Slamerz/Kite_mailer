/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AppHeader from './components/Header';
import DummyComponent from './components/DummyComponent';
import Navigator from './navigation/Navigation';
import MainNavigator from './navigation/MainNavigator';

import Start from './Start';

const App: () => React$Node = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainNavigator />
    // <Navigator />
    // <>
    //   <AppHeader menuButtonClick={handleMenuClick} menuOpen={menuOpen} />

    //   {menuOpen && <DummyComponent />}
    //   {/* <Start /> */}
    //   <View style={styles.screen}>
    //     <Text>Home</Text>
    //   </View>
    // </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
