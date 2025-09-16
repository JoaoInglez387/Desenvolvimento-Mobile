import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Text, View } from 'react-native';

type Props = {
    name:string,
}

export function Itens({name}:Props) {
    return (
        <View style={styles.contener}>
            <AntDesign name="checkcircle" size={24} color="#FF7A00" />
            <Text style={styles.textItem}>{name}</Text>
        </View>
    );
}