import { styles } from "./styles";
import { Button, Text, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

type Props = {
    name: string,
    cal: string,
    onPress: () => void;
}

export function Itens({ name, cal, onPress }: Props) {
    return (
        <View style={styles.contener}>
            <View style={styles.textItem}>
                <MaterialIcons name="emoji-food-beverage" size={20} color="#2D4BA6" />
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.textItem}>
                <AntDesign name="check-circle" size={20} color="#2D97A6" />
                <Text style={styles.text}>{cal}</Text>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
                <Feather name="trash-2" size={20} color="#797A80" />
            </TouchableOpacity>
        </View>
    );
}