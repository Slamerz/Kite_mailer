import React from 'react';
import { Button, Form, Container, Input, Label, Image } from 'native-base';
import { Image } from 'react-native'


const SignInForm = props => {

    return (
        <Container>
            // LOGO GOES HERE
            <Image source={{}}></Image>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input />
                </Item>
            </Form>
            <Button onPress={props.click}>Login</Button>
            <br />
            <p>Don't have an account? <Button>Sign Up</Button></p>
        </Container>
    );
};

export default SignInForm;