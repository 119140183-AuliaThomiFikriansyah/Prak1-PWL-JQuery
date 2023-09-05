import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {
  AbsenLogin,
  AbsenPulang,
  Colors,
  Cuti,
  Izin,
  Kembali,
} from '../../assets';

const ButtonIcon = ({tittle, halaman}) => {
  const Icon = () => {
    if (tittle == 'Absen Masuk') return <AbsenLogin />;

    if (tittle == 'Izin') return <Izin />;

    if (tittle == 'Cuti') return <Cuti />;

    if (tittle == 'Absen Pulang') return <AbsenPulang />;

    if (tittle == 'Kembali') return <Kembali />;

    return <AbsenLogin />;
  };
  return (
    <TouchableOpacity onPress={halaman}>
      <View style={styles.View}>
        <Icon style={styles.Icon} />
        <Text style={styles.Text}>{tittle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

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
