import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.caberacio_container}>
                <Text style={styles.text_titul}>Lista de Compra</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <TextInput style={styles.input} placeholder='Digite algo' placeholderTextColor={"grey"}/>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contener_resultado}>
                    <Event name='Maça'/>
                    <Event name='Banana'/>
                    <Event name='Abacate'/>
                    <Event name='Fruta'/>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}