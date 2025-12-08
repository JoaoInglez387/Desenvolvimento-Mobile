import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaHome() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/fazenda.jpg')} blurRadius={6} />
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.titul}>FarmProp</Text>
                    <Text style={styles.descri}>Aqui você encontra fazenda de confiança que promete.</Text>
                    <Text style={styles.descri}>Assim como Douglas fez.</Text>
                    <Image style={styles.imgTest} source={require('../../../assets/douglas.png')}/>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}