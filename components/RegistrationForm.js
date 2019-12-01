import React from 'react';
import {Alert, Keyboard, Text, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {Button, TextInput, Checkbox} from 'react-native-paper';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .required('Password is required!'),
  });
  return (
    <View style={styles.container}>
      <Formik
        intialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          tos: false,
        }}
        onSubmit={values => alert(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('username')}
              value={values.username}
              label="Username"
              required
            />
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry={true}
              label="Password"
              required
            />
            <TextInput
              onChangeText={handleChange('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={true}
              label="Confirm Password"
              required
            />
            <TextInput
              onChangeText={handleChange('email')}
              value={values.email}
              label="Email"
              required
            />
            <View style={{flexDirection: 'row'}}>
              <Checkbox value={values.tos} onValueChange={!values.tos} />
              <Text style={{marginTop: 9}}>This is a checkbox for ToS</Text>
            </View>

            <Button onPress={handleSubmit} style={styles.button}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default RegistrationForm;
