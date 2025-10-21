import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import TelaHome from './src/app/Home';
import TelaDescricao from './src/app/Telas';
import TelaRotas from './src/app/Rotas';
import TelaBiblioteca from './src/app/Biblioteca';

const Tabs = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen name='Home' component={TelaHome}
                    options={{ tabBarIcon: () => <Feather name='home' color={'blue'} size={30} />, }} />
                <Tabs.Screen name='Telas' component={TelaDescricao}
                    options={{ tabBarIcon: () => <Feather name='monitor' color={'blue'} size={30} />, }} />
                <Tabs.Screen name='Rotas' component={TelaRotas}
                    options={{ tabBarIcon: () => <Feather name='compass' color={'blue'} size={30} />, }} />
                <Tabs.Screen name='Biblioteca' component={TelaBiblioteca}
                    options={{ tabBarIcon: () => <Feather name='book-open' color={'blue'} size={30} />, }} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

