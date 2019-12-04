import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, StyleSheet, Left, Right, Content, Container } from 'native-base'

const DraftMailItem = props => {
    const [email] = useState(''); //from User model
    const [status, facilityName, addressee, saveTime] = useState(''); //from Message model

    return (
        <View style={styles.container}>
            <View style={styles.draftcontainer}>
                <Container>
                    <Content>
                        <Link>
                            <Left>
                                <Text>
                                    <Text>{this.props.email}</Text>
                                    <Text>{this.props.addressee}</Text>
                                    <Text>{this.props.facilityName}</Text>
                                </Text>
                            </Left>
                            <Right>
                                <Text>{this.props.status}</Text>
                                <Text>{this.props.savedTime}</Text>
                            </Right>
                        </Link>
                    </Content>
                </Container>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    text: {
        fontSize: 35,
        color: 'grey',
    },
    draftcontainer: {
        borderRadius: '0px 39px 39px 0px'

    }
});

export default DraftMailItem