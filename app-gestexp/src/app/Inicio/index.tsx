import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Feather, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RotaStackNaveg } from '../../types/navigation';
import { useFinance } from "../../context/FinanceContext";
import BoxConter from "../../components/Bloco";
import MiniCalendario from "../../components/Calendario";

type Props = StackScreenProps<RotaStackNaveg, "Inicial">;

export default function TelaInicio({ navigation }: Props) {
    const { totalEntrada, totalSaida, saldo } = useFinance();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.headerContener}>
                        <Text style={styles.titul}>Gestex</Text>
                        <Text style={styles.descri}>Aqui você gerencia sua empresa da melhor forma.</Text>
                    </View>
                    <View style={styles.containerNav}>
                        <Text style={styles.subtitul}>Resumo</Text>
                        <View style={styles.resumoContener}>
                            <BoxConter titul="Entrada" style={"R$"} value={totalEntrada.toFixed(2).replace('.', ',')} cor='#24a56f' />
                            <BoxConter titul="Saída" style={"R$"} value={totalSaida.toFixed(2).replace('.', ',')} cor='#a52424' />
                            <BoxConter titul="Saldo" style={"R$"} value={saldo.toFixed(2).replace('.', ',')} cor='#2467a5' />
                        </View>
                        <View style={styles.buttonsNavegat}>
                            <TouchableOpacity style={[styles.button, styles.buttonPrim]} onPress={() => navigation.navigate("Controle de Caixa")}>
                                <FontAwesome5 name='dollar-sign' color={'red'} size={20} /> 
                                <Text style={styles.buttonText}>Controle de Caixa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.buttonSeg]} onPress={() => navigation.navigate("Calculadora de Preço")}>
                                <FontAwesome5 name='tags' color={'green'} size={20} /> 
                                <Text style={styles.buttonText}>Calculadora de Preço</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.buttoTerc]} onPress={() => navigation.navigate("Relatório")}>
                                <FontAwesome5 name='chart-bar' color={'green'} size={20} /> 
                                <Text style={styles.buttonText}>Relatórios</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}