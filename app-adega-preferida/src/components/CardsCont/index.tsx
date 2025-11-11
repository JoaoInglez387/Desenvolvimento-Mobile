import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, Touchable, TouchableOpacity, View, TextProps} from 'react-native';

type props = {
    title: string,
    descri: string,
    icon?: any,
}

export default function CardsContato( props: props) {
    return (
        <View style={styles.contener_cards}>
                <View style={styles.img_cards}>{props.icon}</View>
                <View style={styles.text_cards}>
                    <Text style={styles.titul}>{props.title}</Text>
                    <Text style={styles.descri}>{props.descri}</Text>
                </View>
        </View>
    );
}