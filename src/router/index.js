import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconTab from 'react-native-vector-icons/FontAwesome6';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from '../pages/Home';
import History from '../pages/History';
import Splash from '../pages/Splash';
import Profil from '../pages/Profil';
import Login from '../pages/Login';
import Izin from '../pages/Izin';
import AbsenMasuk from '../pages/AbsenMasuk';
import AbsenPulang from '../pages/AbsenPulang';
import Cuti from '../pages/Cuti';

const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'house' : 'house';
          } else if (route.name === 'History') {
            iconName = focused ? 'hourglass-half' : 'hourglass-half';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'user-large' : 'user';
          }

          return <IconTab name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0F56B3',
        tabBarInactiveTintColor: '#9C9C9C',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenMasuk"
        component={AbsenMasuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Izin"
        component={Izin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cuti"
        component={Cuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenPulang"
        component={AbsenPulang}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
