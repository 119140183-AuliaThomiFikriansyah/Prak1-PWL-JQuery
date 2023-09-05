import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets';

const Cuti = () => {
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
            Pengajuan Cuti
          </Text>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

export default Cuti;

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
  view: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
