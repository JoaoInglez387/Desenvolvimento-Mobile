import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener_cards: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
    },

    cards: {
        display: "flex",
        alignItems: "center",
        width: 250,
        padding: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e0e0e0ff',
    },

    text_cards: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    titul: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#400303',
        paddingBottom: 2,
    },

    descri: {
        fontSize: 15,
        fontWeight: 400,
        color: '#400303',
    }

});
