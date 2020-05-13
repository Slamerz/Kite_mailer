import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Radio, Left, Right, ListItem, List} from 'native-base';

const ImageOrientation = props => {
  return (
    <List>
      <ListItem>
        <Left>
          <Radio selected={true} />
        </Left>
        <Right>
          <Text>Landscape</Text>
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Radio selected={false} />
        </Left>
        <Right>
          <Text>Portrait</Text>
        </Right>
      </ListItem>
    </List>
  );
};

const styles = StyleSheet.create({});

export default ImageOrientation;
