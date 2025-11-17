import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';


export default function TelaCorInvertida() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Invertido</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}