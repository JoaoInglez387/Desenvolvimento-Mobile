import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';


export default function TelaDescricao() {

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Text style={styles.titul}>Nome das Telas</Text>
                <Text style={styles.descri}>Perceba que cada aba representa uma tela do aplicativo.</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}