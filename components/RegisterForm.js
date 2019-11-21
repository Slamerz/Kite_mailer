import React, {useState} from "react"
import {View, Text, StyleSheet, TextInput, Keyboard} from 'react-native';
import {Button} from 'native-base';
import CheckBox from "@react-native-community/checkbox"

const RegisterForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [tos, setTos] = useState(false);
    return (
        <View style={styles.container}>

            <TextInput
                value={firstName}
                onChangeText={text => setFirstName(text)}
                placeholder="First Name"
                autoCapitalize="words"
                autoCorrect={false}
                blurOnSubmit={true}
                maxLength={50}
                textContentType="name"
                underlineColorAndroid="grey"
                style={styles.input}
            />
            < TextInput
                value={lastName}
                onChangeText={text => setLastName(text)}
                placeholder="Last Name"
                autoCapitalize="words"
                autoCorrect={false}
                blurOnSubmit={true}
                maxLength={50}
                textContentType="familyName"
                underlineColorAndroid="grey"
                style={styles.input}
            />
            < TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="E-Mail"
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit={true}
                maxLength={50}
                keyboardType="email-address"
                textContentType="emailAddress"
                underlineColorAndroid="grey"
                style={styles.input}
            />
            <TextInput
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                placeholder="Password"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                blurOnSubmit={true}
                maxLength={50}
                secureTextEntry={true}
                textContentType="password"
                underlineColorAndroid="grey"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Confirm Password"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                blurOnSubmit={true}
                maxLength={50}
                secureTextEntry={true}
                textContentType="password"
                underlineColorAndroid="grey"
                style={styles.input}
            />
            <View style={styles.tosBox}>
                <CheckBox
                    checked={tos}
                    onChange={value => setTos(!value)}
                />
                <Text style={{color: "grey"}}>
                    Please agree to our Terms of Service
                </Text>
            </View>
            <Button
                transparent
                title="Register"
                onPress={() => {
                    Keyboard.dismiss();
                    props.navigation.navigate({routeName: 'Navigator'});
                }}>
                <Text style={styles.text}>register</Text>
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "90%"
    },
    input: {
        fontSize: 18
    },
    text: {
        fontSize: 35,
        color: 'grey',
    },
    tosBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
});

export default RegisterForm