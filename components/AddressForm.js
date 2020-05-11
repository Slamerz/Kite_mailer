import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {createRecipient} from '../store/actions/recipients';

import Colors from '../constants/Colors';
import CreateMailButton from '../components/CreateMailButton';
// import {white} from 'react-native-paper/lib/typescript/src/styles/colors';

const AddressForm = props => {
  const [firstName, setFirstName] = useState('');
  const [firstNameMissing, setFirstNameMissing] = useState(null);
  const [lastName, setLastName] = useState('');
  const [lastNameMissing, setLastNameMissing] = useState(null);
  const [inmateId, setInmateId] = useState('');
  const [inmateIdMissing, setInmateIdMissing] = useState(null);
  const [facilityName, setFacilityName] = useState('');
  const [facilityNameMissing, setFacilityNameMissing] = useState(null);
  const [streetAddress, setStreetAddress] = useState('');
  const [streetAddressMissing, setStreetAddressMissing] = useState(null);
  const [city, setCity] = useState('');
  const [cityMissing, setCityMissing] = useState(null);
  const [addressState, setAddressState] = useState('');
  const [addressStateMissing, setAddressStateMissing] = useState(null);
  const [zipCode, setZipCode] = useState('');
  const [zipCodeMissing, setZipCodeMissing] = useState(null);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}> */}
      <TextInput
        value={firstName}
        onChangeText={text => setFirstName(text)}
        placeholder="Recipient's First Name"
        autoCompleteType="name"
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        maxLength={50}
        textContentType="givenName"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {/* </View> */}
      {firstNameMissing && (
        <Text style={{color: 'red'}}>{firstNameMissing}</Text>
      )}
      <TextInput
        value={lastName}
        onChangeText={text => setLastName(text)}
        placeholder="Recipient's Last Name"
        autoCompleteType="name"
        autoCapitalize="characters"
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        maxLength={50}
        textContentType="familyName"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {lastNameMissing && <Text style={{color: 'red'}}>{lastNameMissing}</Text>}

      <TextInput
        value={inmateId}
        onChangeText={text => setInmateId(text)}
        placeholder="Recipient's DOC#"
        autoCompleteType="off"
        autoCorrect={false}
        blurOnSubmit={true}
        maxLength={10}
        keyboardType="number-pad"
        underlineColorAndroid="grey"
        style={styles.input}
      />

      {inmateIdMissing && <Text style={{color: 'red'}}>{inmateIdMissing}</Text>}
      <TextInput
        value={facilityName}
        onChangeText={text => setFacilityName(text)}
        placeholder="Facility Name"
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        maxLength={50}
        textContentType="organizationName"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {facilityNameMissing && (
        <Text style={{color: 'red'}}>{facilityNameMissing}</Text>
      )}
      <TextInput
        value={streetAddress}
        onChangeText={text => setStreetAddress(text)}
        placeholder="Facility Street Address"
        autoCompleteType="off"
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        maxLength={50}
        textContentType="fullStreetAddress"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {streetAddressMissing && (
        <Text style={{color: 'red'}}>{streetAddressMissing}</Text>
      )}
      <TextInput
        value={city}
        onChangeText={text => setCity(text)}
        placeholder="City"
        autoCompleteType="off"
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        maxLength={50}
        textContentType="addressCity"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {cityMissing && <Text style={{color: 'red'}}>{cityMissing}</Text>}

      <TextInput
        value={addressState}
        onChangeText={text => setAddressState(text)}
        placeholder="State"
        autoCompleteType="off"
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        maxLength={50}
        textContentType="addressState"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {addressStateMissing && (
        <Text style={{color: 'red'}}>{addressStateMissing}</Text>
      )}
      <TextInput
        value={zipCode}
        onChangeText={text => setZipCode(text)}
        placeholder="Zip code"
        autoCompleteType="off"
        autoCorrect={false}
        blurOnSubmit={true}
        maxLength={10}
        keyboardType="number-pad"
        textContentType="postalCode"
        underlineColorAndroid="grey"
        style={styles.input}
      />
      {zipCodeMissing && <Text style={{color: 'red'}}>{zipCodeMissing}</Text>}
      {props.createRecipientsLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <View style={styles.button}>
          <Button
            // transparent
            style={styles.button}
            onPress={() => {
              Keyboard.dismiss();
              setFirstName(firstName.trim().toUpperCase());
              setFirstNameMissing(null);
              setLastName(lastName.trim().toUpperCase());
              setLastNameMissing(null);
              setInmateId(inmateId.trim().toUpperCase());
              setInmateIdMissing(null);
              setFacilityName(facilityName.trim().toUpperCase());
              setFacilityNameMissing(null);
              setStreetAddress(streetAddress.trim().toUpperCase());
              setStreetAddressMissing(null);
              setCity(city.trim().toUpperCase());
              setCityMissing(null);
              setAddressState(addressState.trim().toUpperCase());
              setAddressStateMissing(null);
              setZipCode(zipCode.trim().toUpperCase());
              setZipCodeMissing(null);
              if (firstName.length < 1) {
                setFirstNameMissing("Please include Recipient's First Name");
              } else if (lastName.length < 1) {
                setLastNameMissing("Please include Recipient's Last Name");
              } else if (inmateId.length < 1) {
                setInmateIdMissing("Please include Recipient's DOC#");
              } else if (facilityName.length < 1) {
                setFacilityNameMissing('Please include Facility Name');
              } else if (streetAddress.length < 1) {
                setStreetAddressMissing('Please include Street Address');
              } else if (city.length < 1) {
                setCityMissing('Please include City');
              } else if (addressState.length < 1) {
                setAddressStateMissing('Please include State');
              } else if (zipCode.length < 1) {
                setZipCodeMissing('Please include Zip Code');
              } else {
                props.navigation.navigate({routeName: 'CreateMail'});
                // dispatch(
                //   createRecipient({
                //     firstName: firstName,
                //     lastName: lastName,
                //     inmateId: inmateId,
                //     facilityName: facilityName,
                //     streetAddress: streetAddress,
                //     city: city,
                //     addressState: addressState,
                //     zipCode: zipCode,
                //   }),
                // )
                //   .then(() => {
                //     props.navigation.navigate({routeName: 'CreateMail'});
                //   })
                //   .catch(err => {
                //     setFirstName('');
                //     setLastName('');
                //     setInmateId('');
                //     setFacilityName('');
                //     setStreetAddress('');
                //     setCity('');
                //     setAddressState('');
                //     setZipCode('');
                //   });
              }
            }}>
            <Text style={styles.button}>Save Address & Create Mail</Text>
          </Button>
        </View>
      )}
      {/* {props.createRecipientsError && (
        <Text> Something went wrong. Please try again</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
  },
  inputContainer: {
    paddingVertical: 5,
    // width: '90%',
    // borderBottomColor: 'grey',
    // borderBottomWidth: 1,
    // padding: 5,
    // marginVertical: 5,
  },
  input: {
    fontSize: 18,
  },
  text: {
    fontSize: 40,
    color: 'grey',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    height: 50,
    borderRadius: 5,
  },
});

const mapStateToProps = state => {
  return {
    createRecipientsLoading: state.recipients.createRecipientsLoading,
    createRecipientsError: state.recipients.createRecipientsError,
  };
};
const mapDispatchToProps = {
  createRecipient,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressForm);
