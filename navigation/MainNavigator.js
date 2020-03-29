import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import ConfirmationScreen from "../screens/ConfirmationScreen"

// import LoginRegisterTabNavigator from './LoginRegisterTabNavigator';
import LoginRegisterStackNavigator from './LoginRegisterStackNavigator';
import Navigator from './Navigator';
import ConfirmationNavigator from "./ConfirmationNavigator"

const MainNavigator = createSwitchNavigator({
  // SignIn: LoginRegisterTabNavigator,
  SignIn: LoginRegisterStackNavigator,
  Navigator: Navigator,
  Confirmation: ConfirmationNavigator
});

export default createAppContainer(MainNavigator);
