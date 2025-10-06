import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Input from '../../components/Input';

type Props = {
    lagura: Number,
    comprimento: Number
}

export default function App() {
    const [nomeProp, setNomeProp] = useState('');
    const [tipoImov, setTipoImov] = useState('');
    const [largura, setLargura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [soma, setSoma] = useState('');

    function calcularTerr() {
        const lar = parseFloat(largura);
        const comp = parseFloat(comprimento);

        if (!isNaN(lar) && !isNaN(comp)) {
            setSoma(String(lar * comp))
        } else {
            setSoma('');
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.caberacio_container}>
                <Text style={styles.text_titul}>Cadastro Imovel</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <Input placeH='Nome do proprietario' onChangeText={setNomeProp} value={nomeProp} />
                    <Input placeH='Tipo de imovel' onChangeText={setTipoImov} value={tipoImov} />
                    <Input placeH='Largura do terreno' onChangeText={setLargura} value={largura} />
                    <Input placeH='Comprimento do terreno' onChangeText={setComprimento} value={comprimento} />
                    <Button title='Calcular Tamanho' onPress={calcularTerr}></Button>
                </View>
                <View style={styles.contener_resultado}>
                    <Text style={styles.resultados}>Nome do proprietario: {nomeProp}</Text>
                    <Text style={styles.resultados}>Tipo de imovel: {tipoImov}</Text>
                    <Text style={styles.resultados}>Calculo do terreno: {soma + "m²"}</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}