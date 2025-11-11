import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, Touchable, TouchableOpacity, View, Image } from 'react-native';

type props = {
    title: string,
    descri: string,
    src?: any,
}

export default function CardsCardapio(props: props) {
    return (
        <View style={styles.contener_cards}>
            <View style={styles.card}>
                <Image
                    source={props.src}
                    style={styles.img}
                />
                <View style={styles.text_cards}>
                    <Text style={styles.titul}>{props.title}</Text>
                    <Text style={styles.descri}>{props.descri}</Text>
                </View>
            </View>
        </View>
    );
}