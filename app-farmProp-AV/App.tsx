import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TelaHome from './src/app/Home';
import TelaConsulta from './src/app/Consulta';
import TelaCalculadora from './src/app/Calculadora';
import TelaTerreno from './src/app/Terreno'

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={TelaHome}
                    options={{ drawerIcon: () => <Feather name='home' color={'blue'} size={30} />, }} />
                <Drawer.Screen name='Consultar Proprietarios' component={TelaConsulta}
                    options={{ drawerIcon: () => <Feather name='users' color={'blue'} size={30} />, }} />
                <Drawer.Screen name='Calculadora de Preço' component={TelaCalculadora}
                    options={{ drawerIcon: () => <Feather name='shopping-cart' color={'blue'} size={30} />, }} />
                <Drawer.Screen name='Calculadora Terreno' component={TelaTerreno}
                    options={{ drawerIcon: () => <Feather name='feather' color={'blue'} size={30} />, }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}