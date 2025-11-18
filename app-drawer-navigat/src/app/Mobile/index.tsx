import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaMobile() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>React Expo App</Text>
                <Text style={styles.descri}>Programação de aplicativos mobile usando react com Expo Go</Text>
                <Text style={styles.subtitul}>Qual biblioteca usamos?</Text>
                <Text style={styles.descri}>Das bibliotecas que utilizamos podemos destacar três:</Text>
                <View style={styles.contenerText}>
                    <Text style={styles.descri}>* @react-navigation/native</Text>
                    <Text style={styles.descri}>* @react-navigation/bottom-tabs</Text>
                    <Text style={styles.descri}>* @react-navigation/drawer</Text>
                </View>
                <Image style={styles.img} src={'https://docs.expo.dev/static/images/get-started/expo-go.png'}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}