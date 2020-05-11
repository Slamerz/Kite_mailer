import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from 'react-native';
// import NewMailButton from '../components/NewMailButton';

import CreateMailButton from '../components/CreateMailButton';
import AddressForm from '../components/AddressForm';

const AddressFormScreen = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView style={styles.scrollArea}>
            <AddressForm {...props} />
            {/* <CreateMailButton {...props} /> */}
            {/* <NewMailButton {...props} /> */}
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollArea: {
    width: '90%',
  },
  safeArea: {
    width: '100%',
    paddingLeft: '10%',
  },
});

export default AddressFormScreen;
