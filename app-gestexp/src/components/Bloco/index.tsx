import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = {
    titul?: string,
    style?: string,
    value: string,
    cor?: string,
    onPress?: () => void,
}

export default function BoxConter({ titul, style, value, cor }: Props) {
    return (
        <View style={styles.contener_box}>
            <Text style={[styles.titul, { color: cor }]}>{titul}</Text>
            <Text style={styles.box}>{style} {value}</Text>
        </View>
    );
}