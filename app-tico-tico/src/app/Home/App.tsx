import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Itens } from '../../components/Event/Itens';

export default function App() {
    const [list, setList] = useState<string[]>([]);
    const [listName, setListName] = useState('');

  

    function handleAdd() {
        setList(prevState => [...prevState, listName])
        console.log(list)
        setListName("")
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.caberacio_container}>
                <Text style={styles.text_titul}>Lista de Compra</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <Input placeH='Digite algo' onChangeText={e => setListName(e)} onPress={handleAdd} value={listName}/>
                </View>
                <View style={styles.contener_resultado}>
                    <ScrollView>
                        {
                            list.map(item => (
                                <Itens
                                key={item}
                                name={item} 
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}