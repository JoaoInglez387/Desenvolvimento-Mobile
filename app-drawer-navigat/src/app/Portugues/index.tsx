import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaPortugues() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titul}>Literatura - Livro Hora da Estrela</Text>
                <Text style={styles.descri}>Publicado em 1977, A Hora da Estrela é o último romance de Clarice Lispector. Inserido na Terceira Geração Modernista, caracteriza-se como um romance intimista ou psicológico, marcado pelo estilo singular da autora, que projeta emoções e sentimentos pessoais na narrativa.</Text>
                <View style={styles.contenerText}>
                    <Text style={styles.subtitul}>Resumo da Obra</Text>
                    <Text style={styles.descri}>A obra, narrada por Rodrigo S.M., acompanha Macabéa, jovem nordestina pobre e ingênua que vive no Rio de Janeiro. Trabalha como datilógrafa, divide quarto com colegas e encontra pequenos prazeres em ouvir rádio. Apesar de tímida e sem beleza, namora Olímpico, que a abandona por Glória. Ao visitar uma cartomante, recebe previsões otimistas, mas ao sair é atropelada, vivendo sua “hora da estrela” apenas no instante da morte.</Text>
                </View>
                <Image style={styles.img} src={'https://static.todamateria.com.br/upload/li/vr/livroefilmeahoradaestrela-cke.jpg'}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}