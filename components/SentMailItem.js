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
} from 'native-base';
import SentMailItemSmall from './SentMailItemSmall';
import SentMailItemExpanded from './SentMailItemExpanded';

const SentMailItem = props => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={styles.view}>
        {expanded && (
          <View style={styles.view}>
            <SentMailItemExpanded />
          </View>
        )}
        {!expanded && <SentMailItemSmall {...props} />}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({view: {paddingVertical: 2}});

export default SentMailItem;
