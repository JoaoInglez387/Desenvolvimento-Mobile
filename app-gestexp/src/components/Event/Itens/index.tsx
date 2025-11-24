import { styles } from "./styles";
import { Button, Text, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

type Props = {
    data: Date,
    tipo: string,
    descricao: string,
    valor: number,
    onPress: () => void;
}

export function Itens({ data, tipo, descricao, valor, onPress }: Props) {
    const date = new Date(data);
    const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(date);

    return (
        <View style={styles.contener}>
            <View style={styles.textItem}>
                <Text style={styles.text}>{dataFormatada}</Text>
            </View>
            <View style={styles.textItem}>
                <Text style={styles.text}>{tipo}</Text>
            </View>
            <View style={styles.textItem}>
                <Text style={styles.text}>{descricao}</Text>
            </View>
            <View style={styles.textItem}>
                <Text style={styles.text}>R$ {valor.toFixed(2).replace(".", ",")}</Text>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
                <Feather name="trash-2" size={20} color="#797A80" />
            </TouchableOpacity>
        </View>
    );
}