import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, IconLogin} from '../../assets';
import {Button, Input} from '../../components';
import {auth} from '../../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigation.navigate('Home');
        }

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Absensi Login */}
      <View style={styles.header}>
        <IconLogin />
      </View>

      <View style={styles.foother}>
        <View style={styles.text}>
          <Text
            style={{
              color: Colors.hitam,
              fontSize: 25,
            }}>
            Buat Akun
          </Text>
          <Text style={{color: Colors.hitam}}>
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
            keyboardType="numeric"
            onChangeText={text => setPassword(text)}
          />
          <Button onPress={HandleLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
