import {createStackNavigator} from 'react-navigation-stack';

import SettingsScreen from '../screens/SettingsScreen';
import CheckoutScreen from "../screens/CheckoutScreen"

import SentDraftsTabNavigator from './SentDraftsTabNavigator';
import TemplateGalleryMessageTabNavigator from './TemplateGalleryMessageTabNavigator';
import AddressTabNavigator from './AddressTabNavigator'

const Navigator = createStackNavigator({
  Home: SentDraftsTabNavigator,
  SettingsScreen: {screen: SettingsScreen},
  Address: AddressTabNavigator,
  CreateMail: TemplateGalleryMessageTabNavigator,
  Checkout: {screen: CheckoutScreen},
});

export default Navigator;
