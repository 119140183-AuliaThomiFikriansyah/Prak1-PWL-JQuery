import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, IconSplash} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Izin');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.putih,
      }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View>
        <IconSplash />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
