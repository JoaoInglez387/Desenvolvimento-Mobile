import { styles } from "./styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, Text, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = {
    name:string,
    onPress: () => void;
}

export function Itens({name, onPress}:Props) {
    return (
        <View style={styles.contener}>
            <AntDesign name="check-square" size={24} color="#FF7A00"/>
            <Text style={styles.textItem}>{name}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
                <FontAwesome name="trash-o" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}