import {createStackNavigator} from 'react-navigation-stack';

import ConfirmationScreen from '../screens/ConfirmationScreen';

const ConfirmationNavigator = createStackNavigator({
  Confirmation: ConfirmationScreen,
});

export default ConfirmationNavigator;