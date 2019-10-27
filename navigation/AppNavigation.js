import {createStackNavigator} from 'react-navigation-stack';
import {createTabsNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
import YetAnotherScreen from '../screens/YetAnotherScreen';
import DraftScreen from '../screens/DraftScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SentMailScreen from '../screens/SentMailScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Another: {screen: AnotherScreen},
  YetAnotherScreen: {screen: YetAnotherScreen},
  LoginScreen: {screen: LoginScreen},
  DraftScreen: {screen: DraftScreen},
  RegistrationScreen: {screen: RegistrationScreen},
  SentMailScreen: {screen: SentMailScreen},
  SettingsScreen: {screen: SettingsScreen},
});

export default createAppContainer(AppNavigator);
