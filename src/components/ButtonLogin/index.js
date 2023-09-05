import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../assets';
import {Button} from 'react-native-elements';

const ButtonLogin = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}> Masuk</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  container: {
    width: 328,
    height: 50,
    justifyContent: 'center',
    backgroundColor: Colors.default,
    borderRadius: 5,
    marginTop: 50,
  },
  text: {
    color: Colors.putih,
    textAlign: 'center',
  },
});
