import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';


export default function TelaCorNormal() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Normal</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}