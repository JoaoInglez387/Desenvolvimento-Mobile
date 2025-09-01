import { styles } from "./styles";
import {Text, TextInput, TouchableOpacity, View } from 'react-native';

export function Event() {
    return (
        <View style={styles.contener}>
            <Text style={styles.textEvent}>Evento dos Alunos</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}