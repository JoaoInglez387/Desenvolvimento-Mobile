import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = TextInputProps & {
    value: string,
    label: string,
    placeH: string,
    onChangeText: (text: string) => void,
    onPress?: () => void,
}

export default function DropDow({ value, option }: Props) {
    const [value, setValue] = useState<Props | null>(null);
    const [option, setOption] = useState([
        { label: "Entrada", value: "Entrada" },
        { label: "Saída", value: "Saída" },
    ]);

    return (
        <View style={styles.dropdow}>
            <DropDownPicker style={styles.drowp}
                open={open}
                value={value}
                items={option}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setOption}
                placeholder="Selecione uma opção"
            />
        </View>
    );
}