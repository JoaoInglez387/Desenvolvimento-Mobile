import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import CardsContato from '../../components/CardsCont';

export default function TelaContato() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.titul}>Entre em contato conosco para comprar nossos produtos!</Text>
                </View>
                <View style={styles.contener_contat}>
                    <CardsContato 
                    icon={<FontAwesome name="phone" size={44} color={'#400303'} />} title="Telefone:" 
                     descri="+55 21 00000000"/>

                    <CardsContato 
                    icon={<FontAwesome name="map-marker" size={44} color={'#400303'} />}
                    title="Endereço:"
                    descri="Av.123,222 - Rio de Janeiro RJ"/>

                    <CardsContato 
                    icon={<MaterialIcons name="email" size={44} color={'#400303'} />}
                    title="Email:"
                    descri="preferida@adega.com.br"/>

                    <CardsContato 
                    icon={<FontAwesome name="instagram" size={44} color={'#400303'} />} title="Instagram:" 
                    descri="@adegapreferida"/>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}