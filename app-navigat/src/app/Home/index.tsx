import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';


export default function TelaHome() {

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <Text>TEste</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}