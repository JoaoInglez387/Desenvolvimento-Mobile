import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

const Stack = createStackNavigator();

import TelaInicio from './src/app/Inicio';
import TelaControle from './src/app/Controle';
import TelaCalculadora from './src/app/Calculadora';
import TelaConta from './src/app/Conta';

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicial" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Inicial" component={TelaInicio} options={{ title: 'Início'}} />
            <Stack.Screen name="Controle de Caixa" component={TelaControle} options={{ title: 'Controle de Caixa' }} />
            <Stack.Screen name="ViewTasks" component={TelaCalculadora} options={{ title: 'Calculadora de Preço' }} />
            <Stack.Screen name="Relatório" component={TelaConta} options={{ title: 'Relatórios' }} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}
