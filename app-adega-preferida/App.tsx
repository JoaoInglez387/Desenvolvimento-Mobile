import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import TelaInicio from './src/app/Inicio';
import TelaCatalogo from './src/app/Catalogo';
import TelaContato from './src/app/Contato';

const Tabs = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#400303' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold' },
                tabBarActiveBackgroundColor: '#400303',
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#40030376',
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 }
            }}>
                <Tabs.Screen name='Início' component={TelaInicio}
                    options={{ tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />, }} />
                <Tabs.Screen name='Catálogo' component={TelaCatalogo}
                    options={{ tabBarIcon: ({ color, size }) => <Feather name='menu' color={color} size={size} />, }} />
                <Tabs.Screen name='Contato' component={TelaContato}
                    options={{ tabBarIcon: ({ color, size }) => <Feather name='message-circle' color={color} size={size} />, }} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}
