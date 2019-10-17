/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import AppHeader from './components/Header';
import Start from './Start';

const App: () => React$Node = () => {
  return (
    <>
      <AppHeader />
      {/* <Start /> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
