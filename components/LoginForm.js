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
import {Button, Text as TextNB} from 'native-base';
import {useDispatch} from 'react-redux';
import {login} from '../store/actions/auth';
import Colors from '../constants/Colors';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMissing, setEmailMissing] = useState(null);
  const [passwordMissing, setPasswordMissing] = useState(null);

  const dispatch = useDispatch();

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
      {emailMissing && <Text style={{color: 'red'}}>{emailMissing}</Text>}
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
      {passwordMissing && <Text style={{color: 'red'}}>{passwordMissing}</Text>}
      {props.loginLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <Button
          transparent
          title="Login"
          onPress={() => {
            Keyboard.dismiss();
            setPasswordMissing(null);
            setEmailMissing(null);
            const emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(email)) {
              setEmailMissing('Please enter an email address');
            } else if (password.trim().length < 6) {
              setPasswordMissing('Please enter a password');
            } else {
              props.navigation.navigate({routeName: 'Navigator'});
              // dispatch(login({email: email, password: password}))
              //   .then(() => {
              //     props.navigation.navigate({routeName: 'Navigator'});
              //   })
              //   .catch(err => {
              //     setPassword('');
              //     setEmail('');
              //   });
            }
          }}>
          <Text style={styles.text}>login</Text>
        </Button>
      )}
      {props.loginError && <Text> Something went wrong. Please try again</Text>}
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

const mapStateToProps = state => {
  return {
    loginLoading: state.auth.loginLoading,
    login: state.auth.login,
    loginError: state.auth.loginError,
  };
};
const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
