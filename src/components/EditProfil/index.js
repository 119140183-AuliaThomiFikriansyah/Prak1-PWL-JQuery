import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets';
import Keluar from '../Keluar';
import IconOut from 'react-native-vector-icons/FontAwesome6';

const EditProfil = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TextInformasi}>
        <Text
          style={{
            color: Colors.hitam,
            fontFamily: 'FiraSansBold',
          }}>
          Informasi Akun
        </Text>
      </View>
      <View style={{marginTop: windowWidth * 0.025}}>
        <View style={styles.Text1}>
          <Text style={{color: Colors.FontAbuabu, fontFamily: 'FiraSansBold'}}>
            Nama
          </Text>
          <Text style={{color: Colors.hitam, fontFamily: 'FiraSansRegular'}}>
            Aulia Thomi Fikriansyah
          </Text>
        </View>
        <View style={styles.Text1}>
          <Text style={{color: Colors.FontAbuabu, fontFamily: 'FiraSansBold'}}>
            Nomer Telephon
          </Text>
          <Text style={{color: Colors.hitam, fontFamily: 'FiraSansRegular'}}>
            085764686463
          </Text>
        </View>
        <View style={styles.Text1}>
          <Text style={{color: Colors.FontAbuabu, fontFamily: 'FiraSansBold'}}>
            Email
          </Text>
          <Text style={{color: Colors.hitam, fontFamily: 'FiraSansRegular'}}>
            tomyfikriansyah18@gmail.com
          </Text>
        </View>
        <View style={styles.Text1}>
          <Text style={{color: Colors.FontAbuabu, fontFamily: 'FiraSansBold'}}>
            Alamat
          </Text>
          <Text style={{color: Colors.hitam, fontFamily: 'FiraSansRegular'}}>
            Kalianda, Lampung Selatan, Lampung, Indonesia
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Touchable}>
        <View style={styles.View}>
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
    </SafeAreaView>
  );
};

export default EditProfil;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.putih,
    marginHorizontal: 50,
    height: windowheight * 0.46,
    borderRadius: 20,
    marginTop: -windowheight * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
  },
  TextInformasi: {
    marginTop: windowWidth * 0.025,
    width: 240,
  },
  Text1: {
    width: 240,
    marginTop: windowWidth * 0.025,
  },
  Touchable: {
    borderColor: Colors.hitam,
    borderWidth: 1,
    borderRadius: 10,
  },
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
