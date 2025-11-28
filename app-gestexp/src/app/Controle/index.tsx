import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import Input from '../../components/Input';
import BoxConter from '../../components/Bloco';
import ButtonAdd from '../../components/Button';
import { Itens } from '../../components/Event/Itens';

import { useFinance } from "../../context/FinanceContext";

export default function TelaControle() {
    const { list, addItem, setList, totalEntrada, totalSaida, saldo } = useFinance();

    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const [option, setOption] = useState([
        { label: "Entrada", value: "Entrada" },
        { label: "Saída", value: "Saída" },
    ]);

    const [dataSelecionada, setDataSelecionada] = useState<Date | null>(null);
    const [mostrarPicker, setMostrarPicker] = useState(false);

    function handleAdd() {
        let valorNumber = parseFloat(valor.replace(",", ".").replace("R$", ""));

        if (!value || !descricao || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (isNaN(valorNumber) || valorNumber <= 0) {
            alert("Valor inválido");
            return;
        }

        if ((descricao.length < 3) || descricao.length > 15) {
            alert("A descrição deve ter entre 3 e 15 caracteres");
            return;
        }

        addItem({
            data: dataSelecionada ?? new Date(),
            tipo: value as "Entrada" | "Saída",
            descricao,
            valor: valorNumber
        });

        setValue(null);
        setDescricao("");
        setValor("");
    }

    function handRemove(index: number) {
        setList(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.caberacio_container}>
                        <BoxConter titul="Entrada" style={"R$"} value={totalEntrada.toFixed(2).replace('.', ',')} cor='#2DBA5E' />
                        <BoxConter titul="Saída" style={"R$"} value={totalSaida.toFixed(2).replace('.', ',')} cor='#BA322D' />
                        <BoxConter titul="Saldo" style={"R$"} value={saldo.toFixed(2).replace('.', ',')} cor='#2D5DBA' />
                    </View>
                    <View style={styles.contener_person}>
                        <View style={styles.contener_input}>
                            <DropDownPicker
                                style={styles.drowp}
                                open={open}
                                value={value}
                                items={option}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setOption}
                                placeholder="Selecione uma opção"
                            />
                            <Input placeH='Digite a descrição' onChangeText={e => setDescricao(e)} value={descricao} />
                            <Input placeH='Digite o valor' onChangeText={e => setValor(e)} value={valor} numeric={true} />
                            <TouchableOpacity onPress={() => setMostrarPicker(true)} style={styles.drowpData}>
                                <Text style={styles.drowpDataText}> {dataSelecionada ? `📅 Data: ${dataSelecionada.toLocaleDateString()}` : "📅 Selecionar data"}</Text>
                            </TouchableOpacity>

                            {mostrarPicker && (
                                <DateTimePicker
                                    value={dataSelecionada ?? new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={(event, date) => {
                                        setMostrarPicker(false);
                                        if (date) {
                                            setDataSelecionada(date);
                                        }
                                    }}
                                />
                            )}
                            <ButtonAdd title='Adicionar' onPress={handleAdd} />
                        </View>
                        <View style={styles.contener_list}>
                            <View style={styles.legenda_tablet}>
                                <Text style={styles.data}>Data</Text>
                                <Text style={styles.tipo}>Tipo</Text>
                                <Text style={styles.descri}>Descrição</Text>
                                <Text style={styles.valor}>Valor</Text>

                                <TouchableOpacity style={styles.buttonDelet} onPress={() => setList(() => [])}>
                                    <Text style={styles.textButton}>Limpar</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView contentContainerStyle={{ width: "100%" }}>
                                {list.map((item, index) => (
                                    <Itens
                                        key={index}
                                        data={item.data}
                                        tipo={item.tipo}
                                        descricao={item.descricao}
                                        valor={item.valor}
                                        onPress={() => handRemove(index)}
                                    />
                                ))}
                            </ScrollView>
                        </View>

                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
