import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaBiologia() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>O que é a Ecologia?</Text>
                <Text style={styles.descri}>A ecologia é a ciência que estuda as interações entre os seres vivos e o ambiente em que vivem, analisando como essas interações influenciam a distribuição e abundância dos organismos.</Text>
                <Text style={styles.subtitul}>Interações e Níveis de Organização</Text>
                <Text style={styles.descri}>A ecologia analisa como os organismos interagem entre si e com fatores abióticos (como solo, água e clima). Essa disciplina abrange diferentes níveis de organização, incluindo:  Indivíduos, Populações, Comunidades e Ecossistemas.</Text>
                <Image style={styles.img} src={'https://s4.static.brasilescola.uol.com.br/be/2023/10/escrito-ecologia-sobre-a-imagem-da-terra-quase-completamente-coberta-por-topos-de-arvore-de-uma-floresta.jpg'}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}