import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaConta() {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.img} source={require('../../../assets/vinho-qualidade.jpg')} blurRadius={5} /> */}
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.titul}>Adega Preferida</Text>
                    <Text style={styles.descri}>Aqui você encontra os melhores e mais saboroso vinhos.</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}