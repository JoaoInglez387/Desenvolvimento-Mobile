import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = TextInputProps& {
    placeH: string,
    numeric?: boolean,
    onPress?: () => void,
}

export default function Input({placeH, onChangeText, onPress, value, numeric, ...rest}:Props) {
    return (
        <View style={styles.contener_input}>
            <TextInput style={styles.input} placeholder={placeH} placeholderTextColor={"#b6b8c0"} onChangeText={onChangeText} value={value}keyboardType={numeric ? "numeric" : "default"} {...rest}/>
        </View>
    );
}