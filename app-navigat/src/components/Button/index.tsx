import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, Touchable, TouchableOpacity, View, ButtonProps } from 'react-native';

type Props = ButtonProps & {
    title: string,
    onPress: () => void;
}

export default function ButtonAdd({ title, onPress }: Props) {
    return (
        <View style={styles.contener_input}>
            <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.5}>
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}