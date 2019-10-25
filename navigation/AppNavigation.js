import {createStackNavigator} from 'react-navigation-stack';
import {createTabsNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
import YetAnotherScreen from '../screens/YetAnotherScreen';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Another: {screen: AnotherScreen},
  YetAnotherScreen: {screen: YetAnotherScreen},
});

export default createAppContainer(AppNavigator);
