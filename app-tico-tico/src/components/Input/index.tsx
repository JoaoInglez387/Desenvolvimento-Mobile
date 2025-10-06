import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = TextInputProps& {
    placeH: string,
}

export default function Input({placeH, onChangeText, onPress, value}:Props) {
    return (
        <View style={styles.contener_input}>
            <TextInput style={styles.input} placeholder={placeH} placeholderTextColor={"#8f8885"} onChangeText={onChangeText} value={value}/>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
                <Ionicons name="add-circle-outline" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}