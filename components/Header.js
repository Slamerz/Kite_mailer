import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

// import Input from './Input';

import Colors from '../constants/Colors';

export default class AppHeader extends Component {
  render() {
    return (
      <Header searchBar style={styles.header}>
        <Left>
          <Button transparent onPress={() => {}}>
            <Icon name="ios-menu" />
          </Button>
        </Left>
        <Body>
          <Title>KITe</Title>
        </Body>
        <Right>
          {/* <Input /> */}
          <Button transparent>
            <Icon name="search" onPress={() => {}} />
          </Button>
          <Button transparent>
            <Icon name="more" onPress={() => {}} />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: Colors.primary,
  },
});
