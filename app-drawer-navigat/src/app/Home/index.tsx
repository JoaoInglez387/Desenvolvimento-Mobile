import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function TelaHome() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Materias</Text>
                <Text style={styles.descri}>Esse é o início do aplicativo com o intuito de mostrar as matérias do 4° semestre.</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}