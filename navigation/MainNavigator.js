import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import LoginRegisterTabNavigator from './LoginRegisterTabNavigator';
import LoginRegisterStackNavigator from './LoginRegisterStackNavigator';
import Navigator from './Navigator';

const MainNavigator = createSwitchNavigator({
  // SignIn: LoginRegisterTabNavigator,
  SignIn: LoginRegisterStackNavigator,
  Navigator: Navigator,
});

export default createAppContainer(MainNavigator);
