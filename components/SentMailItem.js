import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Icon,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Card,
  CardItem,
  Button,
} from 'native-base';
import SentMailItemSmall from './SentMailItemSmall';
import SentMailItemExpanded from './SentMailItemExpanded';

const SentMailItem = props => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.view}>
      {expanded && (
        <View style={styles.view}>
          <Card>
            <CardItem>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{width: '70%'}}>
                  <Text>Recipient Name</Text>
                  <Text>Destination</Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                  <Text>Date</Text>
                </View>
              </View>
              <Right>
                <Button transparent onPress={handleSelect}>
                  <Icon
                    name="md-close"
                    style={{color: 'black', fontSize: 30}}
                  />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Text>More</Text>
            </CardItem>
          </Card>
        </View>
      )}
      {!expanded && (
        <TouchableOpacity onPress={handleSelect}>
          <SentMailItemSmall {...props} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({view: {paddingVertical: 2}});

export default SentMailItem;
