import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useFinance } from "../../context/FinanceContext";
import { useState } from "react";
import MiniCalendario from "../../components/Calendario";

export default function TelaRelatorio() {
    const { list, resumoDiario, resumoGeral, resumoMensal } = useFinance();
    const [diaSelecionado, setDiaSelecionado] = useState(new Date());

    const resumoDoDia = resumoDiario(list, diaSelecionado);
    const resumoDoMes = resumoMensal(list, diaSelecionado.getMonth(), diaSelecionado.getFullYear());
    const resumoGeralDados = resumoGeral(list);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Relatórios</Text>
                <MiniCalendario onSelectDay={(dateString) => {
                        const [ano, mes, dia] = dateString.split("-").map(Number);
                        const dataCorrigida = new Date(ano, mes - 1, dia);
                        setDiaSelecionado(dataCorrigida);}}
                />
                <Text>📅 Dia selecionado: {diaSelecionado.toLocaleDateString()}</Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Relatório Geral</Text>
                    <Text>Entradas: R$ {resumoGeralDados.totalEntrada.toFixed(2)}</Text>
                    <Text>Saídas: R$ {resumoGeralDados.totalSaida.toFixed(2)}</Text>
                    <Text>Saldo: R$ {resumoGeralDados.saldo.toFixed(2)}</Text>
                    <Text>Qtd Entradas: {resumoGeralDados.quantidadeEntrada}</Text>
                    <Text>Qtd Saídas: {resumoGeralDados.quantidadeSaida}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Relatório do Mês</Text>
                    <Text>Entradas: R$ {resumoDoMes.totalEntrada.toFixed(2)}</Text>
                    <Text>Saídas: R$ {resumoDoMes.totalSaida.toFixed(2)}</Text>
                    <Text>Saldo: R$ {resumoDoMes.saldo.toFixed(2)}</Text>
                    <Text>Qtd Entradas: {resumoDoMes.quantidadeEntrada}</Text>
                    <Text>Qtd Saídas: {resumoDoMes.quantidadeSaida}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Relatório do Dia</Text>
                    <Text>Entradas: R$ {resumoDoDia.totalEntrada.toFixed(2)}</Text>
                    <Text>Saídas: R$ {resumoDoDia.totalSaida.toFixed(2)}</Text>
                    <Text>Saldo: R$ {resumoDoDia.saldo.toFixed(2)}</Text>
                    <Text>Qtd Entradas: {resumoDoDia.quantidadeEntrada}</Text>
                    <Text>Qtd Saídas: {resumoDoDia.quantidadeSaida}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
