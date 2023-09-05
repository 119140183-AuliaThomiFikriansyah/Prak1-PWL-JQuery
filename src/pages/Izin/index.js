import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets';
import {
  DropIzinTanggal,
  DropdownIzin,
  Tanggal,
  UploadIzin,
} from '../../components';

const Izin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.view}>
          <Text
            style={{
              fontFamily: 'FiraSansRegular',
              fontSize: 18,
              color: Colors.putih,
            }}>
            Pengajuan Izin
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <DropdownIzin />
        <DropIzinTanggal />
        <Tanggal />
      </View>
    </SafeAreaView>
  );
};

export default Izin;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.putih,
  },
  header: {
    width: windowWidth,
    height: windowheight * 0.1,
    backgroundColor: Colors.default,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.putih,
  },
});
