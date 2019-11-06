import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import LoginRegisterTabNavigator from './LoginRegisterTabNavigator';
import Navigator from './Navigator';

const MainNavigator = createSwitchNavigator({
  SignIn: LoginRegisterTabNavigator,
  Navigator: Navigator,
});

export default createAppContainer(MainNavigator);
