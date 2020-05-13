import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardFrontPreview from './CardFrontPreview';
import CardBackPreview from './CardBackPreview';
import {Button, Icon} from 'native-base';

const Preview = props => {
  const [front, setFront] = useState(true);
  return (
    <View style={styles.preview}>
      {front ? <CardFrontPreview {...props} /> : <CardBackPreview {...props} />}
      <Button transparent onPress={() => setFront(!front)}>
        <Icon name={front ? 'undo' : 'redo'} style={styles.text} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 50,
  },
});

export default Preview;
