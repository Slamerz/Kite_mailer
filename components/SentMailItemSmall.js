import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Card, CardItem, Right} from 'native-base';

const SentMailItemSmall = props => {
  return (
    <View style={styles.card}>
      <Card borderBottomRightRadius={100} borderTopRightRadius={100}>
        <CardItem borderBottomRightRadius={100} borderTopRightRadius={100}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{width: '70%'}}>
              <Text>Recipient Name</Text>
              <Text>Destination</Text>
            </View>
            <Right>
              <View style={{alignSelf: 'center'}}>
                <Text>Date</Text>
              </View>
            </Right>
          </View>
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
