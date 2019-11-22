import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Text, StyleSheet } from 'native-base'

const DraftMailItem = props => {
    const [email] = useState(''); //from User model
    const [status, facilityName, addressee, saveTime] = useState(''); //from Message model

    return (
        <View style={styles.container}>
            <View style={styles.draftcontainer}>
                <Link>
                    <Text>
                        {this.props.email}
                        {this.props.addressee}
                        {this.props.facilityName}
                    </Text>
                    <Text>
                        {this.props.status}
                        {this.props.savedTime}
                    </Text>
                </Link>
                <Header>Filler</Header>
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