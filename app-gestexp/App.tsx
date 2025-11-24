import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

import TelaInicio from './src/app/Inicio';
import TelaControle from './src/app/Controle';
import TelaCalculadora from './src/app/Calculadora';
import TelaConta from './src/app/Conta';

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
                tabBarLabelStyle: { fontWeight: 'bold' }
            }}>
                <Tabs.Screen name='Início' component={TelaInicio}
                    options={{ tabBarIcon: ({ color }) => (<Feather name='home' color={color} size={24} />), }} />
                <Tabs.Screen name='Controle de caixa' component={TelaControle}
                    options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name='wine-bottle' color={color} size={22} />), }} />
                <Tabs.Screen name='Calculadora de preço' component={TelaCalculadora}
                    options={{ tabBarIcon: ({ color }) => (<FontAwesome6 name="address-book" color={color} size={22} />) }} />
                <Tabs.Screen name='Conta' component={TelaConta}
                    options={{ tabBarIcon: ({ color }) => (<FontAwesome6 name="address-book" color={color} size={22} />) }} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}
