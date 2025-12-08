import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import {ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Button } from 'react-native';
import Input from '../../components/Input';
import ButtonBusc from '../../components/Button';
import { useState, useEffect } from 'react';

export default function TelaTerreno() {
    const [largura, setLargura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [soma, setSoma] = useState('0,00');

    function calcularTerr() {
        if (largura && isNaN(parseFloat(largura.replace('m','').replace(',','.').replace('M','').replace('m²','').replace('M²','')))) {
            alert("Digite apenas números na largura do Terreno!");
            return;
        }

        if (comprimento && isNaN(parseFloat(comprimento.replace('m','').replace(',','.').replace('M','').replace('m²','').replace('M²','')))) {
            alert("Digite apenas números no comprimento do Terreno!");
            return;
        }

        const lar = parseFloat(largura.replace('m','').replace(',','.').replace('M','').replace('m²','').replace('M²',''));
        const comp = parseFloat(comprimento.replace('m','').replace(',','.').replace('M','').replace('m²','').replace('M²',''));
        
        if(comp < 0 || lar < 0) {
            alert("Digite valores de tamanho mairo que 0!");
            return;
        }

        if (!isNaN(lar) && !isNaN(comp)) {
            setSoma(String((lar * comp).toFixed(2)))
        } else {
            setSoma('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.contener_titul}>
                    <Text style={styles.subtitul}>Calcule Tamanho do seu Terreno</Text>
                </View>
                <View style={styles.contener_person}>
                    <View style={styles.contener_input}>
                        <Input placeH='Largura do terreno' onChangeText={e => setLargura(e)} value={largura} />
                        <Input placeH='Comprimento do terreno' onChangeText={e => setComprimento(e)} value={comprimento} />
                        <ButtonBusc title='Calcular' onPress={calcularTerr} />
                    </View>
                    <View style={styles.contener_resultado}>
                        <Text style={styles.text_titul}>Tamanho do Terreno</Text>
                        <Text style={styles.valor}>{soma + ' m²'}</Text>
                        <Text style={styles.text_descri}>Terreno bom para agricultura e agropecuaria</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}