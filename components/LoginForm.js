import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard} from 'react-native';
import {Button} from 'native-base';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, setSignedIn] = useState(false)

  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: androidClientId,
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
} catch (e) {
      console.log("error", e)
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          blurOnSubmit={true}
          keyboardType="email-address"
          maxLength={50}
          textContentType="emailAddress"
          underlineColorAndroid="grey"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
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
      </View>
      <Button
        transparent
        title="Login"
        onPress={() => {
          Keyboard.dismiss();
          props.navigation.navigate({routeName: 'Navigator'});
        }}>
        <Text style={styles.text}>Login</Text>
      </Button>
      <Button 
      transparent
      title="Google Sign-in"
      onPress={signInHandler}>
      </Button>
        <Text style={styles.text}>Login with Google</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  inputContainer: {
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
    fontSize: 35,
    color: 'grey',
  },
});

export default LoginForm;
