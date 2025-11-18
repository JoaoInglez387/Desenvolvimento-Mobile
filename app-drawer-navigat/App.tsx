import { } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TelaBiologia from './src/app/Biologia';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Biologia' component={ TelaBiologia}
            options={{ drawerIcon: () => <Feather name='feather' color={'blue'} size={30} />, }} />
        </Drawer.Navigator>

    </NavigationContainer>
  );
}