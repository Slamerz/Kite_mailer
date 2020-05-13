import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const CardFrontPreview = props => {
  return (
    <View style={styles.card}>
      <Text>CardFrontPreview</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 250,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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
)(CardFrontPreview);
