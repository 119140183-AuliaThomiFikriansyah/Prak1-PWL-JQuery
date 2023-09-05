import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {Colors, Kembali} from '../../assets';

const ActionButtonKembali = ({tittle, halaman}) => {
  const Icon = () => {
    if (tittle == 'Kembali') return <Kembali />;

    return <Kembali />;
  };
  return (
    <TouchableOpacity onPress={halaman}>
      <View style={styles.View}>
        <Icon style={styles.Icon} />
      </View>
    </TouchableOpacity>
  );
};

export default ActionButtonKembali;

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
  },
  Icon: {
    width: 24,
    height: 24,
  },
  Text: {
    fontFamily: 'FiraSansRegular',
    fontSize: 14,
    textAlign: 'center',
    color: Colors.hitam,
  },
});
