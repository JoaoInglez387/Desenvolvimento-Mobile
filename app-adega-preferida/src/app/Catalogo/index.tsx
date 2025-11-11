import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import CardsCardapio from '../../components/CardsCard';

export default function TelaCatalogo() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
{/*                 <View style={styles.text}>
                    <Text style={styles.titul}>Nossos vinhos</Text>
                    <Text style={styles.descri}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
                </View> */}
                <View style={styles.contener_cards}>
                    <CardsCardapio
                    src={require('../../../assets/vinho-especial.jpg')}
                    title={'Chatigny Chardonnay'}
                    descri={'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.'}/>
                    <CardsCardapio
                    src={require('../../../assets/vinho-especial.jpg')}
                    title={'Chatigny Chardonnay'}
                    descri={'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.'}/>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}