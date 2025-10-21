import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';


export default function TelaRotas() {

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Text style={styles.titul}>Rotas de navegação</Text>
                <Text style={styles.descri}>As rotas de navegação entre as páginas são dividas em 4:</Text>
                <Text style={styles.descri}>Tela Home: Tela inicial que possui uma breve introdução e direciona o usúario ao entrar.</Text>
                <Text style={styles.descri}>Tela Telas: Explica o nome das telas do aplicativo possui.</Text>
                <Text style={styles.descri}>Tela Rotas: Explica como funciona cada tela de navegação.</Text>
                <Text style={styles.descri}>Tela Biblioteca: Traz quais bibliotecas estão sendo utilizadas no projeto.</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}