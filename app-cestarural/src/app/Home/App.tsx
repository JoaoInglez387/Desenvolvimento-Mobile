import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";

type Item = {
    alimento: string;
    produtor: string;
    valor: number;
    quant: number;
};

export default function App() {
    const [lista, setLista] = useState<Item[]>([
        { alimento: "Nachos porção 100g", produtor: "Sabor Maria do Bairro", valor: 15, quant: 1 },
        { alimento: "Frijoles", produtor: "Sabor A Usurpadora", valor: 4, quant: 2 },
        { alimento: "Sour Cream", produtor: "Sabor Maria Mercedes", valor: 4, quant: 2 },
        { alimento: "Mix de Abobrinha e Berinjela Grelhados", produtor: "Sabor Marimar", valor: 4, quant: 2 },
    ]);
    const [alimento, setAlimento] = useState("");
    const [produtor, setProdutor] = useState("");
    const [valor, setValor] = useState("");

    const taxaEntrega = 5;

    const adicionarItem = () => {
        if (!alimento || !produtor || !valor) {
            return;
        }

        setLista([
            ...lista,
            { alimento, produtor, valor: Number(valor), quant: 1 },
        ]);

        setAlimento("");
        setProdutor("");
        setValor("");
    };

    const alterarQuant = (index: number, delta: number) => {
        const novaLista = [...lista];
        novaLista[index].quant = Math.max(0, novaLista[index].quant + delta);
        if (novaLista[index].quant === 0) novaLista.splice(index, 1);
        setLista(novaLista);
    };

    const totalPedido =
        lista.reduce((acc, i) => acc + i.valor * i.quant, 0) + taxaEntrega;

    const renderItem = ({ item, index }: { item: Item; index: number }) => (
        <View style={styles.card}>
            <View style={{ flex: 1 }}>
                <Text style={styles.nome}>{item.alimento}</Text>
                <Text style={styles.produtor}>{item.produtor}</Text>
                <Text style={styles.preco}>R${item.valor.toFixed(2)}</Text>
            </View>
            <View style={styles.qtdContainer}>
                <TouchableOpacity
                    onPress={() => alterarQuant(index, -1)}
                    style={styles.botao}
                >
                    <Text style={styles.botaoTxt}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtd}>{item.quant}</Text>
                <TouchableOpacity
                    onPress={() => alterarQuant(index, 1)}
                    style={styles.botao}
                >
                    <Text style={styles.botaoTxt}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrinho de Compras</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Produto"
                    style={styles.input}
                    value={alimento}
                    onChangeText={setAlimento}
                />
                <TextInput
                    placeholder="Produtor"
                    style={styles.input}
                    value={produtor}
                    onChangeText={setProdutor}
                />
                <TextInput
                    placeholder="Valor"
                    style={styles.input}
                    value={valor}
                    keyboardType="numeric"
                    onChangeText={setValor}
                />
                <TouchableOpacity onPress={adicionarItem} style={styles.addBtn}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={lista}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                style={{ width: "90%"}}
            />

            <View style={styles.resumo}>
                <Text>Taxa de entrega: R${taxaEntrega.toFixed(2)}</Text>
                <Text style={styles.total}>
                    Total do pedido: R${totalPedido.toFixed(2)}
                </Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
