import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon,Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const SentMailItem = props => {
    return (
        <Container>
        <Header />
        <Content >
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Jane Doe</Text>
                <Text note>email@email.com</Text>
              </Body>
              <Right>
                <Text note>09 Sept 19</Text>
              </Right>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
}

export default SentMailItem