import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { FinanceProvider } from "./src/context/FinanceContext";

const Stack = createStackNavigator<RotaStackNaveg>();

import TelaInicio from './src/app/Inicio';
import TelaControle from './src/app/Controle';
import TelaCalculadora from './src/app/Calculadora';
import TelaConta from './src/app/Conta';

type RotaStackNaveg = {
    Inicial: undefined;
    "Controle de Caixa": undefined;
    "Calculadora de Preço": undefined;
    Relatório: undefined;
};

export default function App() {
    return (
        <FinanceProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Inicial" screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="Inicial" component={TelaInicio} options={{ title: 'Início' }} />
                    <Stack.Screen name="Controle de Caixa" component={TelaControle} options={{ title: 'Controle de Caixa' }} />
                    <Stack.Screen name="Calculadora de Preço" component={TelaCalculadora} options={{ title: 'Calculadora de Preço' }} />
                    <Stack.Screen name="Relatório" component={TelaConta} options={{ title: 'Relatórios' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </FinanceProvider>
    );
}
