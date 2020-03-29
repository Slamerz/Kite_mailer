import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import SettingsButton from '../components/SettingsButton';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Colors from '../constants/Colors';

import AddressBookScreen from '../screens/AddressBookScreen';
import AddressFormScreen from '../screens/AddressFormScreen';

const AddressTabNavigator = createMaterialTopTabNavigator(
  {
    AddressForm: {
      screen: AddressFormScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-contact" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    AddressBookScreen: {
      screen: AddressBookScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-bookmarks" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
      indicatorStyle: {backgroundColor: Colors.primary},
      showIcon: true,
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

AddressTabNavigator.navigationOptions = ({navigation}) => ({
  headerTitle: 'KITe Address Mail',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={SettingsButton}>
      <Item
        title="Settings"
        iconName="md-settings"
        onPress={() => {
          navigation.navigate({routeName: 'SettingsScreen'});
        }}
      />
    </HeaderButtons>
  ),
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.secondary,
});

export default AddressTabNavigator;