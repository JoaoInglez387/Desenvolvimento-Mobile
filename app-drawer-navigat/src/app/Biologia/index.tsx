import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function TelaBiologia() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Ecologia</Text>
                <Text style={styles.descri}>A ecologia é a ciência que estuda as interações entre os seres vivos e o ambiente em que vivem, analisando como essas interações influenciam a distribuição e abundância dos organismos.</Text>
                <Text style={styles.subtitul}>Interações e Níveis de Organização</Text>
                <Text style={styles.descri}>A ecologia analisa como os organismos interagem entre si e com fatores abióticos (como solo, água e clima). Essa disciplina abrange diferentes níveis de organização, incluindo:  Indivíduos, Populações, Comunidades e Ecossistemas.</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}