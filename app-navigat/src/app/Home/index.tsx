import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';


export default function TelaHome() {

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Text style={styles.titul}>Como navegar?</Text>
                <Text style={styles.descri}>Toque nas abas abaixo para navegar entre as telas</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}