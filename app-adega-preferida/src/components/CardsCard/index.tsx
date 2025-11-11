import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, Touchable, TouchableOpacity, View, TextProps, Image } from 'react-native';

type Props = TextProps & {
    title: string,
    descri: string,
    src: any,
}

export default function CardsCardapio({ src, title, descri }: Props) {
    return (
        <View style={styles.contener_cards}>
            <View style={styles.img_cards}>
                <Image
                    source={src}
                    style={styles.img}
                />
            </View>
            <View style={styles.text_cards}>
                <Text style={styles.titul}>{title}</Text>
                <Text style={styles.descri}>{descri}</Text>
            </View>
        </View>
    );
}