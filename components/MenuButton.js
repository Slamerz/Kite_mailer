import React from 'react';
import {Button, Icon} from 'native-base';

const MenuButton = props => {
  let menuIcon = props.menuOpen ? 'ios-arrow-down' : 'ios-menu';
  return (
    <Button transparent onPress={props.click}>
      <Icon name={menuIcon} />
    </Button>
  );
};

export default MenuButton;
