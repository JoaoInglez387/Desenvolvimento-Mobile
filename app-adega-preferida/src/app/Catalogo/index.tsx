import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import CardsCardapio from '../../components/CardsCard';

export default function TelaCatalogo() {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll_container} contentContainerStyle={styles.contener_cards} showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <View style={styles.text}>
                        <Text style={styles.titul}>Nossos vinhos</Text>
                        <Text style={styles.descri}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
                    </View>
                    <View style={styles.contener_cards}>
                        <CardsCardapio
                            src={require('../../../assets/vinho-branco.jpg')}
                            title={'Chatigny Chardonnay'}
                            descri={'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.'} />
                        <CardsCardapio
                            src={require('../../../assets/vinho-rose.jpg')}
                            title={'Concha y Toro Exportacion'}
                            descri={'Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.'} />
                        <CardsCardapio
                            src={require('../../../assets/vinho-seco.jpg')}
                            title={"Portada Winemaker's"}
                            descri={'Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.'} />
                        <CardsCardapio
                            src={require('../../../assets/vinho-especial.jpg')}
                            title={'Elvio Cogno Ravera Barolo'}
                            descri={'Vinho estruturado, com sabor de cereja vermelha madura, framboesas, notas de tabaco e taninos aveludados.'} />
                        <CardsCardapio
                            src={require('../../../assets/vinho-tinto.jpg')}
                            title={"Portada Winemaker's Tinto"}
                            descri={'Vinho tinto encorpado, com sabor intenso e frutado, final levemente adocicado e coloração vermelho-rubi.'} />
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View >
    );
}