import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../../assets';
import IconEmail from 'react-native-vector-icons/FontAwesome6';

const Input = props => {
  return (
    <View style={styles.container}>
      <IconEmail name={props.name} style={styles.icon} />
      <TextInput
        style={styles.textinput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.FontTextInput}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 50,
    backgroundColor: Colors.DefaulTextinput,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textinput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: Colors.hitam,
  },
  icon: {
    color: Colors.FontTextInput,
    fontSize: 20,
    paddingLeft: 10,
  },
});
