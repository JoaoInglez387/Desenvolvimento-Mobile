import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useFinance } from "../../context/FinanceContext";
import { useState } from "react";
import MiniCalendario from "../../components/Calendario";

export default function TelaRelatorio() {
    const { list, resumoDiario, resumoGeral, resumoMensal } = useFinance();
    const [diaSelecionado, setDiaSelecionado] = useState(new Date());
    const nomeMes = diaSelecionado.toLocaleDateString("pt-BR", { month: "long" });

    const resumoDoDia = resumoDiario(list, diaSelecionado);
    const resumoDoMes = resumoMensal(list, diaSelecionado.getMonth(), diaSelecionado.getFullYear());
    const resumoGeralDados = resumoGeral(list);

    function corSaldo(valor: number) {
        if (valor > 0) return "#24a56f";
        if (valor < 0) return "#a52424";
        return "#2D7ABA";
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.titul}>Relatórios</Text>
                </View>
                <View style={styles.resumoGeral}>
                    <Text style={styles.resumoTitl}>Relatório Geral</Text>
                    <View style={styles.cardsDados}>
                        <View style={styles.cards}>
                            <Text style={styles.cardsResTitl}>Entradas</Text>
                            <Text style={[styles.cardsResDescri,styles.colorEntra]}>R$ {resumoGeralDados.totalEntrada.toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsResTitl}>Saídas</Text>
                            <Text style={[styles.cardsResDescri,styles.colorSaida]}>R$ {resumoGeralDados.totalSaida.toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsResTitl}>Saldo</Text>
                            <Text style={[styles.cardsResDescri, {color: corSaldo(resumoDoMes.saldo)}]}>R$ {resumoGeralDados.saldo.toFixed(2).replace('.', ',')}</Text>
                        </View>
                    </View>
                    <View style={styles.cardsQtd}>
                        <View style={styles.cards}>
                            <Text style={styles.cardsResTitl}>Qtd Entradas</Text>
                            <Text style={[styles.cardsResDescri,styles.colorEntra]}>{resumoGeralDados.quantidadeEntrada}</Text>
                        </View>
                        <View style={styles.cards}>
                            <Text style={styles.cardsResTitl}>Qtd Saídas</Text>
                            <Text style={[styles.cardsResDescri,styles.colorSaida]}>{resumoGeralDados.quantidadeSaida}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardConetener}>
                    <Text style={styles.resumoTitl}>Relatório do Mês e Dia</Text>
                    <MiniCalendario onSelectDay={(dateString) => {
                        const [ano, mes, dia] = dateString.split("-").map(Number);
                        const dataCorrigida = new Date(ano, mes - 1, dia, 12);
                        setDiaSelecionado(dataCorrigida);
                    }}
                    />
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>📅 Relatório do Mês {nomeMes}</Text>
                        <Text style={[styles.descriCard, styles.colorEntra]}>💵 Entradas: R$ {resumoDoMes.totalEntrada.toFixed(2).replace('.', ',')}</Text>
                        <Text style={[styles.descriCard, styles.colorSaida]}>💸 Saídas: R$ {resumoDoMes.totalSaida.toFixed(2).replace('.', ',')}</Text>
                        <Text style={[styles.descriCard, {color: corSaldo(resumoDoMes.saldo)}]}>💰 Saldo: R$ {resumoDoMes.saldo.toFixed(2).replace('.', ',')}</Text>
                        <View style={styles.linha}></View>
                        <Text style={styles.descriCard}>Quatidade Entradas: {resumoDoMes.quantidadeEntrada}</Text>
                        <Text style={styles.descriCard}>Quatidade Saídas: {resumoDoMes.quantidadeSaida}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>📈 Relatório do Dia ({diaSelecionado.toLocaleDateString("pt-BR")})</Text>
                        <Text style={[styles.descriCard, styles.colorEntra]}>💵 Entradas: R$ {resumoDoDia.totalEntrada.toFixed(2).replace('.', ',')}</Text>
                        <Text style={[styles.descriCard, styles.colorSaida]}>💸 Saídas: R$ {resumoDoDia.totalSaida.toFixed(2).replace('.', ',')}</Text>
                        <Text style={[styles.descriCard, {color: corSaldo(resumoDoDia.saldo)}]}>💰 Saldo: R$ {resumoDoDia.saldo.toFixed(2).replace('.', ',')}</Text>
                        <View style={styles.linha}></View>
                        <Text style={styles.descriCard}>Quatidade Entradas: {resumoDoDia.quantidadeEntrada}</Text>
                        <Text style={styles.descriCard}>Quatidade Saídas: {resumoDoDia.quantidadeSaida}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
