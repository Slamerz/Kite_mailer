import React, {useState} from 'react';
import {Button, Icon} from 'native-base';

const MenuButton = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState('ios-menu');
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    menuIcon === 'ios-menu'
      ? setMenuIcon('ios-arrow-down')
      : setMenuIcon('ios-menu');
  };

  return (
    <Button transparent onPress={handleMenuClick}>
      <Icon name={menuIcon} />
    </Button>
  );
};

export default MenuButton;
