import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const CardFrontPreview = props => {
  return (
    <View>
      {props.landscape ? (
        <View style={styles.card}>
          <Text>CardFrontPreview</Text>
        </View>
      ) : (
        <View style={styles.card2}>
          <Text>CardFrontPreview</Text>
        </View>
      )}
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
  card2: {
    width: 250,
    height: 400,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});

const mapStateToProps = state => {
  return {
    landscape: state.mail.landscape,
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFrontPreview);
