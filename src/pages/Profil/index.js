import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BgProfil, Colors} from '../../assets';
import {Profil} from '../../assets';
import {EditProfil} from '../../components';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BgProfil} style={styles.Bg}>
        <View style={styles.profil}>
          <Image source={Profil} />
          <View style={styles.text}>
            <Text style={{fontFamily: 'FiraSansBold', fontSize: 18}}>
              AULIA THOMI FIKRIANSYAH
            </Text>
            <Text style={{fontFamily: 'FiraSansRegular', fontSize: 18}}>
              119140183
            </Text>
          </View>
        </View>
      </ImageBackground>
      <EditProfil />
    </SafeAreaView>
  );
};

export default History;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Bg: {
    width: windowWidth,
    height: windowheight * 0.297,
  },
  profil: {
    width: windowWidth,
    height: windowheight * 0.297,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 10,
  },
});
