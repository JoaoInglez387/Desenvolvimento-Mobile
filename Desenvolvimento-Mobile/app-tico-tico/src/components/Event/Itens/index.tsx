import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, Text, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    name:string,
    onPress: () => void;
}

export function Itens({name, onPress}:Props) {
    return (
        <View style={styles.contener}>
            <AntDesign name="checkcircle" size={24} color="#FF7A00" />
            <Text style={styles.textItem}>{name}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
                <Ionicons name="add-circle-outline" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}