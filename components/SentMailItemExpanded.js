import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Card, CardItem} from 'native-base';

const SentMailItemExpand = props => {
  return (
    <View style={styles.card}>
      <Card>
        <CardItem>
          <Text>Large Card</Text>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
});

export default SentMailItemExpand;
