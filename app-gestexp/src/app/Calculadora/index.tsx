import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { useState } from 'react';
import Input from '../../components/Input';
import ButtonAdd from '../../components/Button';

export default function TelaCalculadora() {
    const [calcular, setCalcular] = useState('0,00');
    const [produto, setProduto] = useState('');
    const [imposto, setImposto] = useState('');
    const [frete, setFrete] = useState('');
    const [lucro, setLucro] = useState('');
    const { lucroReais, margemLucro } = CalcularMargem();

    function Calculadora() {
        if (produto && isNaN(parseFloat(produto.replace('R$', '').replace(',', '.')))) {
            alert("Digite apenas números no valor do produto!");
            return;
        }

        if (frete && isNaN(parseFloat(frete.replace('R$', '').replace(',', '.')))) {
            alert("Digite apenas números no frete!");
            return;
        }

        if (imposto && isNaN(parseFloat(imposto.replace('%', '').replace(',', '.').replace('R$', '')))) {
            alert("Digite apenas números no imposto!");
            return;
        }

        if (lucro && isNaN(parseFloat(lucro.replace(',', '.').replace('%', '')))) {
            alert("Digite apenas números no lucro!");
            return;
        }

        if (!lucro.includes("R$") && !lucro.includes("%")) {
            alert("No lucro, escreva R$ ou %");
            return;
        }

        if (imposto !== "" && !imposto.includes("R$") && !imposto.includes("%")) {
            alert("No imposto, escreva R$ ou %");
            return;
        }

        const valorProduto = parseFloat(produto.replace('R$', '').replace(',', '.')) || 0;
        const valorImposto = parseFloat(imposto.replace('%', '').replace(',', '.').replace('R$', '')) || 0;
        const valorFrete = parseFloat(frete.replace('R$', '').replace(',', '.')) || 0;
        const valorLucro = parseFloat(lucro.replace(',', '.').replace('%', '')) || 0;

        if(valorProduto < 0 || valorImposto < 0 || valorFrete < 0 || valorLucro < 0) {
            alert("Digite números maiores que 0!");
        }

        let lucroFinal = valorLucro;

        if (lucro.includes("%")) {
            lucroFinal = valorProduto * (valorLucro / 100)
        }

        let impostoFinal = valorImposto;

        if (imposto.includes("%")) {
            impostoFinal = valorProduto * (valorImposto / 100)
        }

        const resultado = valorProduto + impostoFinal + valorFrete + lucroFinal;
        setCalcular(resultado.toFixed(2).replace(".", ","));
    }

    function CalcularMargem() {
        const valorProduto = parseFloat(produto.replace('R$', '').replace(',', '.')) || 0;
        const valorTotal = parseFloat(calcular.replace(',', '.')) || 0;

        if (valorProduto === 0 || valorTotal === 0) {
            return { lucroReais: "0,00", margemLucro: "0,00" };
        }

        const lucroReais = valorTotal - valorProduto;
        const margemLucro = (lucroReais / valorTotal) * 100;


        return {
            lucroReais: lucroReais.toFixed(2).replace('.', ','),
            margemLucro: margemLucro.toFixed(2).replace('.', ',')
        };
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.contener_person}>
                    <View style={styles.contener_input}>
                        <Input placeH='Digite o valor do produto' onChangeText={e => setProduto(e)} value={produto} numeric={true}/>
                        <Input placeH='Digite o valor do imposto (opcional) (% ou R$)' onChangeText={e => setImposto(e)} value={imposto}/>
                        <Input placeH='Digite o valor de frente (opcional)' onChangeText={e => setFrete(e)} value={frete} numeric={true}/>
                        <Input placeH='Digite o valor que deseja receber (% ou R$)' onChangeText={e => setLucro(e)} value={lucro}/>
                        <ButtonAdd title='Calcular' onPress={Calculadora} />
                    </View>
                    <View style={styles.contener_resultado}>
                        <Text style={styles.text_titul}>Deve cobrar</Text>
                        <Text style={styles.valor}>R$ {calcular}</Text>
                        <Text style={styles.text_descri}>Lucro: R$ {lucroReais}</Text>
                        <Text style={styles.text_descri}>Margem de lucro de {margemLucro}%</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}