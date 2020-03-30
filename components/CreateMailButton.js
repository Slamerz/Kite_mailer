import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Icon} from 'native-base';

import Colors from '../constants/Colors';

const CreateMailButton = props => {
  return (
    <View>
        <Button
            transparent
            title="Create Mail"
            onPress={() => {
                props.navigation.navigate({routeName: 'CreateMail'});
            }}>
            <Text>Create Mail</Text>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateMailButton;