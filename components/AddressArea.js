import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import AddressLine from './AddressLine';

const AddressArea = props => {
  return (
    <View style={styles.area}>
      {props.recipient && (
        <View>
          <AddressLine
            {...props}
            line={
              props.recipient.firstName.toUpperCase() +
              ' ' +
              props.recipient.lastName.toUpperCase() +
              ', ' +
              props.recipient.inmateId
            }
          />
          <AddressLine
            {...props}
            line={props.recipient.facilityName.toUpperCase()}
          />
          <AddressLine
            {...props}
            line={props.recipient.streetAddress.toUpperCase()}
          />
          <AddressLine
            {...props}
            line={
              props.recipient.city.toUpperCase() +
              ', ' +
              props.recipient.addressState.toUpperCase() +
              ' ' +
              props.recipient.zipCode
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    width: '40%',
    alignItems: 'center',
    paddingTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    recipient: state.recipients.currentRecipient,
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressArea);
