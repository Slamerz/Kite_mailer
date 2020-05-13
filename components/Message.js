import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {saveMessage} from '../store/actions/mail';
import {connect} from 'react-redux';

const Message = props => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <TextInput
        multiline={true}
        numberOfLines={15}
        maxLength={780}
        style={styles.input}
        textAlignVertical="top"
        placeholder="Write your message here"
        onChangeText={text => setMessage(text)}
        onEndEditing={() => {
          dispatch(props.saveMessage(message));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    fontSize: 18,
    padding: 15,
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {
  saveMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);
