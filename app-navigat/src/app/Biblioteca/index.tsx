import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';


export default function TelaBiblioteca() {

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Text style={styles.titul}>Qual biblioteca usamos?</Text>
                <Text style={styles.descri}>Das bibliotecas que utilizamos podemos destacar duas:</Text>
                <Text style={styles.descri}>@react-navigation/native e</Text>
                <Text style={styles.descri}>@react-navigation/bottom-tabs</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}