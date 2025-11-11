import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener_cards: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 5,
    },

    img_cards: {
        display: "flex",
        alignItems: "center",
    },

    text_cards: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        color: '#ffffffff',
    },

    titul: {
        fontSize: 24,
    },

    descri: {
        fontSize: 14,
    }

});
