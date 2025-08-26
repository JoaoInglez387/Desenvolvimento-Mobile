import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>Meu primeiro Projeto</Text>
                <Text style={styles.text_legend}>Vamos aprender coisas</Text>
                <TextInput style={styles.input} placeholder='Digite algo' placeholderTextColor={"grey"}/>
                <Button title="botão" onPress={() => console.log("Deu certo")}/>
                <TouchableOpacity style={styles.buttonText} activeOpacity={0.5}>
                    <Text>Botão Teste</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}