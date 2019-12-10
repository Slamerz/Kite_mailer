import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RegisterForm from "../components/RegisterForm";
import Colors from '../constants/Colors';
// import RegistrationForm from '../components/RegistrationForm';

const RegistrationScreen = props => {
    return (
        <View style={styles.screen}>
            <RegisterForm {...props}/>
        </View>
    );
};

RegistrationScreen.navigationOptions = {
    headerTitle: 'KITe Sign Up',
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.secondary,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RegistrationScreen;
