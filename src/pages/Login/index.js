import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors, IconLogin} from '../../assets';
import {Input} from '../../components';
import {FirbaseAuth} from '../../../firebase';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(FirbaseAuth);

  const HLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User account created & signed in!');
      navigation.navigate('Menu');
    } catch (error) {
      console.log(error);
      if (error.code == 'auth/invalid-email') {
        console.log(error.code);
        Alert.alert('Email yang anda masukkan salah');
      }
      if (error.code == 'auth/wrong-password') {
        console.log(error.code);
        Alert.alert('Password yang anda masukkan salah');
      }
      if (error.code == 'auth/missing-password') {
        console.log(error.code);
        Alert.alert('Silahkan masukan password anda');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F56B3" />
      <View style={styles.header}>
        <IconLogin />
      </View>
      <View style={styles.foother}>
        <View style={styles.text}>
          <Text
            style={{
              color: Colors.hitam,
              fontSize: 25,
              fontFamily: 'FiraSansBold',
            }}>
            Masuk
          </Text>
          <Text
            style={{
              color: Colors.hitam,
              fontSize: 14,
              fontFamily: 'FiraSansRegular',
            }}>
            Selamat datang silahkan masuk dengan akun anda
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <Input
            name="squarespace"
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            name="lock"
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity
            style={{
              width: 328,
              height: 50,
              justifyContent: 'center',
              backgroundColor: Colors.default,
              borderRadius: 5,
              marginTop: 50,
            }}
            onPress={HLogin}>
            <Text
              style={{
                color: Colors.putih,
                textAlign: 'center',
                fontFamily: 'FiraSansBold',
              }}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default,
  },
  header: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foother: {
    flex: 1.2,
    backgroundColor: Colors.putih,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    marginTop: 30,
    marginLeft: 40,
  },
});
