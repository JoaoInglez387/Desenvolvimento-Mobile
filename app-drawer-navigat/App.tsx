import { } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TelaHome from './src/app/Home';
import TelaBiologia from './src/app/Biologia';
import TelaMatematica from './src/app/Matematica';
import TelaMobile from './src/app/Mobile';
import TelaPortugues from './src/app/Portugues';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={ TelaHome}
            options={{ drawerIcon: () => <Feather name='home' color={'blue'} size={30} />, }} />
            <Drawer.Screen name='Biologia' component={ TelaBiologia}
            options={{ drawerIcon: () => <Feather name='feather' color={'blue'} size={30} />, }} />
            <Drawer.Screen name='Matematica' component={ TelaMatematica}
            options={{ drawerIcon: () => <Feather name='divide' color={'blue'} size={30} />, }} />
            <Drawer.Screen name='Mobile' component={ TelaMobile}
            options={{ drawerIcon: () => <Feather name='code' color={'blue'} size={30} />, }} />
            <Drawer.Screen name='Português' component={ TelaPortugues}
            options={{ drawerIcon: () => <Feather name='book' color={'blue'} size={30} />, }} />
        </Drawer.Navigator>

    </NavigationContainer>
  );
}