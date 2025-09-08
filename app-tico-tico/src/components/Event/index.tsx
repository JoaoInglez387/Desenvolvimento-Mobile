import { styles } from "./styles";
import {Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    name:string,
    onClick?: () => void
}

export function Event({name}:Props) {
    return (
        <View style={styles.contener}>
            <Text style={styles.textEvent}>{name}</Text>
        </View>
    );
}