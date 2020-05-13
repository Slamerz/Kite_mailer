import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import MessageArea from './MessageArea';
import AddressArea from './AddressArea';

const CardBackPreview = props => {
  return (
    <View style={styles.card}>
      <MessageArea {...props} />
      <AddressArea {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 250,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
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
)(CardBackPreview);
