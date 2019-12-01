import {createStackNavigator} from 'react-navigation-stack';

import SettingsScreen from '../screens/SettingsScreen';

import SentDraftsTabNavigator from './SentDraftsTabNavigator';
import TemplateGalleryMessageTabNavigator from './TemplateGalleryMessageTabNavigator';

const Navigator = createStackNavigator({
  Home: SentDraftsTabNavigator,
  SettingsScreen: {screen: SettingsScreen},
  CreateMail: TemplateGalleryMessageTabNavigator,
});

export default Navigator;
