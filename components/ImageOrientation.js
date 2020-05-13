import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Radio, Left, Right, ListItem, List, Content} from 'native-base';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {setOrientation} from '../store/actions/mail';

const ImageOrientation = props => {
  const [landscape, setLandscape] = useState(true);
  const dispatch = useDispatch();

  return (
    <View style={styles.view}>
      <ListItem>
        <Left>
          <Text>Landscape</Text>
        </Left>
        <Right>
          <Radio
            selected={landscape}
            onPress={() => {
              if (landscape) {
                return;
              }
              dispatch(props.setOrientation(!landscape));
              setLandscape(!landscape);
            }}
          />
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>Portrait</Text>
        </Left>
        <Right>
          <Radio
            selected={!landscape}
            onPress={() => {
              if (!landscape) {
                return;
              }
              dispatch(props.setOrientation(!landscape));
              setLandscape(!landscape);
            }}
          />
        </Right>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
  },
});

const mapStateToProps = {};
const mapDispatchToProps = {
  setOrientation,
};

export default connect(
  null,
  mapDispatchToProps,
)(ImageOrientation);