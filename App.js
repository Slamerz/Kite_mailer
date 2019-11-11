/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigation/MainNavigator';
import mailReducer from './store/reducers/mail';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({mail: mailReducer, auth: authReducer});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
