import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const LoginRegisterStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegistrationScreen,
});

export default LoginRegisterStackNavigator;
