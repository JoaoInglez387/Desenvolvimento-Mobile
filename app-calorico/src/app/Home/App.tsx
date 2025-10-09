import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ButtonAdd from '../../components/Button';
import { Itens } from '../../components/Event/Itens';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

type Props = {
    name:string,
    cal: string,
}

export default function App() {
    const [list, setList] = useState<Props[]>([]);
    const [nameAlimento, setNameAlimento] = useState('');
    const [caloria, setCaloria] = useState('');

    function handleAdd() {
        if (!nameAlimento || !caloria) {
            alert("Preencha todos os campos");
            return;
        };

        if (isNaN(Number(caloria.replace("cal", "").replace("kcal", "").replace(",", ".")))) {
            alert("Insira um valor numérico para calorias");
            return;
        }

        let calorias = caloria.replace("cal", "").replace("kcal", "").replace(",", ".");

        setList(prevState => [...prevState, {name: nameAlimento, cal: parseFloat(calorias).toFixed(2) + " kcal"}]);
        console.log(list);
        setNameAlimento("");
        setCaloria("");
    }

    function handRemove(name: string) {
        return setList(prevState => prevState.filter(item => item.name !== name))
    }

    function totalCal() {
        let total = 0;

        for(let i = 0; i < list.length; i++) {
            let cal = parseFloat(list[i].cal.replace("cal", "").replace("kcal", "").replace(",", "."));

            if (!isNaN(cal)) {
                total += cal;
            }
        }

        return total.toFixed(2);
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <View style={styles.caberacio_container}>
                    <Text style={styles.text_titul}>Calorias</Text>
                </View>
                <View style={styles.contener_person}>
                    <View style={styles.contener_input}>
                        <Input placeH='Digite o alimento' onChangeText={e => setNameAlimento(e)} value={nameAlimento} />
                        <Input placeH='Digite as calorias' onChangeText={e => setCaloria(e)} value={caloria} />
                        <ButtonAdd title='Adicionar' onPress={handleAdd} />
                    </View>
                    <View style={styles.contener_list}>
                        <View style={styles.legenda_tablet}>
                            <View style={styles.item_leg}>
                                <MaterialIcons name="emoji-food-beverage" size={20} color="#2D4BA6"/>
                                <Text style={styles.item}>Item</Text>
                            </View>
                            <View style={styles.caloria_leg}>
                                <AntDesign name="check-circle" size={20} color="#2D97A6"/>
                                <Text style={styles.caloria}>Calorias</Text>
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
                                        name={item.name}
                                        cal={item.cal}
                                        onPress={() => handRemove(item.name)}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.contener_resultado}>
                        <Text style={styles.text_total}>{totalCal() + " kcal"}</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}