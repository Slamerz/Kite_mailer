import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

// import Input from './Input';
import MenuButton from './MenuButton';

import Colors from '../constants/Colors';

const AppHeader = props => {
  return (
    <Header searchBar style={styles.header}>
      <Left>
        <MenuButton click={props.menuButtonClick} menuOpen={props.menuOpen} />
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
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: Colors.primary,
  },
});

export default AppHeader;
