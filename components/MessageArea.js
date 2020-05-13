import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const MessageArea = props => {
  return (
    <View style={styles.area}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    borderRightColor: 'gray',
    borderRightWidth: 1,
    height: 250,
    alignSelf: 'flex-start',
    width: '60%',
    paddingLeft: 20,
    paddingTop: 30,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  text: {
    fontSize: 10,
  },
});

const mapStateToProps = state => {
  return {
    message: state.mail.message,
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageArea);
