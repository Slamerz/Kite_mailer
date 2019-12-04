import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Container, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';

const SentMailItemExpand = props => {
  const [email] = useState(''); //from User model
  const [status, facilityName, addressee, saveTime, message, photos] = useState(''); //from Message model
  return (
    <View style={styles.container}>
      <View>
        <Container>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.email}</Text>
                  <Text>{this.props.addressee}</Text>
                  <Text>{this.props.facilityName}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* Images still need to be added to this, with a .map() through {this.props.photos} */}
                <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                <Text>{this.props.message}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Right>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="paper-plane" />
                  <Text>Message Sent</Text>
                  <Text>{this.props.message}</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Container>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  text: {
    fontSize: 35,
    color: 'grey',
  },
  sentcontainer: {
    borderRadius: '0px 39px 39px 0px'

  }
});


export default SentMailItemExpand