import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RotaStackNaveg } from '../../types/navigation';
import { useFinance } from "../../context/FinanceContext";
import BoxConter from "../../components/Bloco";

type Props = StackScreenProps<RotaStackNaveg, "Inicial">;

export default function TelaInicio({ navigation }: Props) {
    const { totalEntrada, totalSaida, saldo } = useFinance();

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.headerContener}>
                    <Text style={styles.titul}>Adega Preferida</Text>
                    <Text style={styles.descri}>Aqui você encontra os melhores e mais saboroso vinhos.</Text>
                </View>
                <View style={styles.containerNav}>
                    <View style={styles.resumoContener}>
                        <BoxConter titul="Entrada" style={"R$"} value={totalEntrada.toFixed(2).replace('.', ',')} cor='#24a56f' />
                        <BoxConter titul="Saída" style={"R$"} value={totalSaida.toFixed(2).replace('.', ',')} cor='#a52424' />
                        <BoxConter titul="Saldo" style={"R$"} value={saldo.toFixed(2).replace('.', ',')} cor='#2467a5' />
                    </View>
                    <View style={styles.calendarioView}>
                        <Text style={styles.titul}>Adega Preferida</Text>
                        <Text style={styles.descri}>Aqui você encontra os melhores e mais saboroso vinhos.</Text>
                    </View>
                    <View style={styles.buttonsNavegat}>
                        <TouchableOpacity style={[styles.button, styles.buttonPrim]} onPress={() => navigation.navigate("Controle de Caixa")}>
                            <Text style={styles.buttonText}>Controle de Caixa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonSeg]} onPress={() => navigation.navigate("Calculadora de Preço")}>
                            <Text style={styles.buttonText}>Calculadora de Preço</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttoTerc]} onPress={() => navigation.navigate("Relatório")}>
                            <Text style={styles.buttonText}>Relatórios</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}