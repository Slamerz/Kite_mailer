import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Card, CardItem} from 'native-base';

const SentMailItemSmall = props => {
  return (
    <View style={styles.card}>
      <Card borderBottomRightRadius={100} borderTopRightRadius={100}>
        <CardItem borderBottomRightRadius={100} borderTopRightRadius={100}>
          <Text>Small Card</Text>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
  },
});

export default SentMailItemSmall;
