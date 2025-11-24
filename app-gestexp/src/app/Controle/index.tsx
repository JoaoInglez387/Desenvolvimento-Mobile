import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import Input from '../../components/Input';
import BoxConter from '../../components/Bloco';
import ButtonAdd from '../../components/Button';
import { Itens } from '../../components/Event/Itens';

type Props = {
    data: Date,
    value: string,
    descricao: string,
    valor: number,
}

export default function TelaControle() {
    const [list, setList] = useState<Props[]>([]);
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const [option, setOption] = useState([
        { label: "Entrada", value: "Entrada" },
        { label: "Saída", value: "Saída" },
    ]);

    function handleAdd() {
        const date = new Date();
        let valorNumber = parseFloat(valor.replace(",", ".").replace("R$", ""));

        if (!value || !descricao || !valor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (isNaN(valorNumber)) {
            alert("Insira um valor numérico para o valor");
            return;
        }

        if (valorNumber <= 0) {
            alert("O valor deve ser maior que zero");
            return;
        }

        if ((descricao.length < 3) || descricao.length > 15) {
            alert("A descrição deve ter entre 3 e 15 caracteres");
            return;
        }

        setList(prevState => [...prevState, { data: date, value: value, descricao: descricao, valor: valorNumber }]);
        console.log(list);
        setValue(null);
        setDescricao("");
    }

    function handRemove(data: Date) {
        return setList(prevState => prevState.filter(item => item.data.toString() !== data.toString()));
    }

    function totalEntrada() {
        let totalEntrada = 0;

        for (let i = 0; i < list.length; i++) {
            if (list[i].value === "Entrada") {
                totalEntrada += list[i].valor;
            }
        }

        return totalEntrada.toFixed(2).replace('.',',');
    }

    function totalSaida() {
        let totalSaida = 0;

        for (let s = 0; s < list.length; s++) {
            if (list[s].value === "Saída") {
                totalSaida += list[s].valor;
            }
        }

        return totalSaida.toFixed(2).replace('.',',');
    }

    function Saldo() {
        let saldo = parseFloat(totalEntrada()) - parseFloat(totalSaida());
        return saldo.toFixed(2).replace('.',',');
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.caberacio_container}>
                    <BoxConter titul="Entrada" style={"R$"} value={totalEntrada()} cor='#24a56f' />
                    <BoxConter titul="Saída" style={"R$"} value={totalSaida()} cor='#a52424'/>
                    <BoxConter titul="Saldo" style={"R$"} value={Saldo()} cor='#2467a5'/>
                </View>
                <View style={styles.contener_person}>
                    <View style={styles.contener_input}>
                        <DropDownPicker style={styles.drowp}
                            open={open}
                            value={value}
                            items={option}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setOption}
                            placeholder="Selecione uma opção"
                        />
                        <Input placeH='Digite a descrição' onChangeText={e => setDescricao(e)} value={descricao} />
                        <Input placeH='Digite o valor' onChangeText={e => setValor(e)} value={valor} />
                        <ButtonAdd title='Adicionar' onPress={handleAdd} />
                    </View>
                    <View style={styles.contener_list}>
                        <View style={styles.legenda_tablet}>
                            <View style={styles.tab_leg}>
                                <Text style={styles.data}>Data</Text>
                            </View>
                            <View style={styles.tab_leg}>
                                <Text style={styles.tipo}>Tipo</Text>
                            </View>
                            <View style={styles.tab_leg}>
                                <Text style={styles.descri}>Descrição</Text>
                            </View>
                            <View style={styles.tab_leg}>
                                <Text style={styles.descri}>Valor</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonDelet} onPress={() => setList([])} activeOpacity={0.5}>
                                <Text style={styles.textButton}>Limpar</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={{ width: "100%" }}>
                            {
                                list.map((item, index) => (
                                    <Itens
                                        key={index}
                                        data={item.data}
                                        tipo={item.value}
                                        descricao={item.descricao}
                                        valor={item.valor}
                                        onPress={() => handRemove(item.data)}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}