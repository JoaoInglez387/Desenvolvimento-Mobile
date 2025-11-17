import { } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaCorNormal from './src/app/Normais';
import TelaCorInvertida from './src/app/Invertidas';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Cores Normais' component={ TelaCorNormal}/>
            <Drawer.Screen name='Cores Invertidas' component={ TelaCorInvertida}/>
        </Drawer.Navigator>

    </NavigationContainer>
  );
}