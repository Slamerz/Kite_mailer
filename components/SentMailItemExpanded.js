import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Header } from 'native-base'
import { Image } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const SentMailItemExpand = props => {
    return (
        <Container>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Message Header here</Text>
                  <Text note>email@email.com</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                   text text text text text text text text
                   text text text text text text text text
                   text text text text text text text text
                   text text text text text text text text text
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="paper-plane" />
                  <Text>Message Sent</Text>
                  <Text> 9 Sept 19 </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
      </Container>
      )
  }

export default SentMailItemExpand