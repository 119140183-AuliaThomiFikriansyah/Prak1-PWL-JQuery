import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../assets';
import IconOut from 'react-native-vector-icons/FontAwesome6';

const Keluar = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.Text}>
        <IconOut name="circle-info" style={{color: Colors.hitam}}></IconOut>
        <Text
          style={{
            fontFamily: 'FiraSansBold',
            color: Colors.hitam,
            marginLeft: 5,
          }}>
          KELUAR
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Keluar;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.hitam,
    borderWidth: 1,
    borderRadius: 10,
  },
  Text: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
