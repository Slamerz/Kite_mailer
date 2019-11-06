import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';

import SentDraftsTabNavigator from './SentDraftsTabNavigator';
import TemplateGalleryMessageTabNavigator from './TemplateGalleryMessageTabNavigator';
import LoginRegisterTabNavigator from './LoginRegisterTabNavigator';

const Navigator = createStackNavigator({
  Home: SentDraftsTabNavigator,
  SettingsScreen: {screen: SettingsScreen},
  CreateMail: TemplateGalleryMessageTabNavigator,
  // SignIn: LoginRegisterTabNavigator,
});

export default createAppContainer(Navigator);
