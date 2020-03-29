import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import SettingsButton from '../components/SettingsButton';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Colors from '../constants/Colors';

import GalleryScreen from '../screens/GalleryScreen';
// import MailTemplateScreen from '../screens/MailTemplateScreen';
import MessageScreen from '../screens/MessageScreen';
import PreviewScreen from "../screens/PreviewScreen"

const TemplateGalleryMessageTabNavigator = createMaterialTopTabNavigator(
  {
    // Template: {
    //   screen: MailTemplateScreen,
    //   navigationOptions: {
    //     tabBarIcon: tabInfo => {
    //       return (
    //         <Ionicons name="ios-albums" size={25} color={tabInfo.tintColor} />
    //       );
    //     },
    //   },
    // },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-images" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-create" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Preview: {
      screen: PreviewScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-eye" size={25} color={tabInfo.tintColor} />
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

TemplateGalleryMessageTabNavigator.navigationOptions = ({navigation}) => ({
  headerTitle: 'KITe Create Mail',
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

export default TemplateGalleryMessageTabNavigator;
