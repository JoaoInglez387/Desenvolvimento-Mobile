import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, Touchable, TouchableOpacity, View, TextProps} from 'react-native';

type Props = TextProps &{
    title: string,
    descri: string,
    svg: string,
}

export default function CardsContato({ title, descri, svg }: Props) {
    return (
        <View style={styles.contener_cards}>
                <View style={styles.img_cards}>
                    {svg}
                </View>
                <View style={styles.text_cards}>
                    <Text style={styles.titul}>{title}</Text>
                    <Text style={styles.descri}>{descri}</Text>
                </View>
        </View>
    );
}