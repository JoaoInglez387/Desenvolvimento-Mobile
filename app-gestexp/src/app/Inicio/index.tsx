import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaInicio() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.titul}>Adega Preferida</Text>
                    <Text style={styles.descri}>Aqui você encontra os melhores e mais saboroso vinhos.</Text>
                </View>
                {/*                 <View style={styles.containerNav}>
                    <View style={styles.caberacio_container}>
                        <BoxConter titul="Entrada" style={"R$"} value={totalEntrada()} cor='#24a56f' />
                        <BoxConter titul="Saída" style={"R$"} value={totalSaida()} cor='#a52424'/>
                        <BoxConter titul="Saldo" style={"R$"} value={Saldo()} cor='#2467a5'/>
                    </View>
                    <View style={styles.calendarioView}>
                        <Text style={styles.titul}>Adega Preferida</Text>
                        <Text style={styles.descri}>Aqui você encontra os melhores e mais saboroso vinhos.</Text>
                    </View>
                    <View style={styles.navegaActions}>
                        <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={() => navigation.navigate('AddTask' as never)}>
                        <Text style={styles.buttonText}>+ Adicionar Tarefa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={() => navigation.navigate('ViewTasks' as never)}
                        >
                        <Text style={styles.buttonText}>📋 Ver Tarefas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={[styles.button, styles.buttonTertiary]}
                        onPress={() => navigation.navigate('Reports' as never)}
                        >
                        <Text style={styles.buttonText}>📊 Relatórios</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}