import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets';
import {Profil} from '../../assets';
import {ButtonIcon} from '../../components';

const Home = ({navigation}) => {
  const HandleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profil}>
          <Image source={Profil} style={styles.ImgPorfil} />
          <View style={styles.text}>
            <Text style={{fontFamily: 'FiraSansBold', fontSize: 18}}>
              Hello,
            </Text>
            <Text style={{fontFamily: 'FiraSansRegular', fontSize: 16}}>
              Selamat datang di absensi online
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonIcon
          tittle="Absen Masuk"
          halaman={() => HandleGoTo('AbsenMasuk')}
        />
        <ButtonIcon tittle="Izin" halaman={() => HandleGoTo('Izin')} />
        <ButtonIcon tittle="Cuti" halaman={() => HandleGoTo('Cuti')} />
        <ButtonIcon
          tittle="Absen Pulang"
          halaman={() => HandleGoTo('AbsenPulang')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.putih,
  },
  header: {
    width: windowWidth,
    height: windowheight * 0.237,
    backgroundColor: Colors.default,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: Colors.putih,
    marginHorizontal: windowWidth * 0.064,
    height: 90,
    borderRadius: 20,
    marginTop: -windowheight * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    justifyContent: 'space-around',

    elevation: 5,
    alignItems: 'center',
  },
  profil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgPorfil: {
    width: 48,
    height: 48,
  },
  text: {
    marginLeft: 10,
  },
});
