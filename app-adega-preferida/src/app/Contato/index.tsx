import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function TelaContato() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.titul}>Entre em contato conosco para comprar nossos produtos</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}