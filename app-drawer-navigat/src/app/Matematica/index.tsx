import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaMatematica() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Geometria analítica</Text>
                <Text style={styles.descri}>A Geometria Analítica estuda elementos geométricos em um sistema de coordenadas num plano ou espaço. Estes objetos geométricos são determinados por sua localização e posição em relação a pontos e eixos deste sistema de orientação.</Text>
                <Text style={styles.subtitul}>Sistema cartesiano ortogonal</Text>
                <Text style={styles.descri}>O Sistema Cartesiano Ortogonal é uma base de referência para localização de coordenadas. É constituído, em um plano, por dois eixos perpendiculares entre si.</Text>
                <Image style={styles.img} src={'https://static.todamateria.com.br/upload/im/ag/image-551-cke.jpg'}/>
                <View style={styles.contenerText}>
                    <Text style={styles.descri}>* A origem O(0,0) deste sistema é a intersecção destes eixos.</Text>
                    <Text style={styles.descri}>* O eixo x é o das abscissas.</Text>
                    <Text style={styles.descri}>* O eixo y é o das ordenadas.</Text>
                    <Text style={styles.descri}>* Convenciona-se a orientação anti-horária dos quatro quadrantes.</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}