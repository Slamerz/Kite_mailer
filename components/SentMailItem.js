import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Left, Body, Right, Thumbnail, Text } from 'native-base';

const SentMailItem = props => {
  const [email] = useState(''); //from User model
  const [status, facilityName, addressee, saveTime] = useState(''); //from Message model

  return (
    <View style={styles.container}>
      <View style={styles.sentcontainer}>
        <Container>
          <Content >
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
              <Text>{this.props.email}</Text>
              <Text>{this.props.addressee}</Text>
              <Text>{this.props.facilityName}</Text>
            </Body>
            <Right>
              <Text>{this.props.status}</Text>
              <Text>{this.props.saveTime}</Text>
            </Right>
          </Content>
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

export default SentMailItem