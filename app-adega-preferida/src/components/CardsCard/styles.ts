import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener_cards: {
        display: 'flex',
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#7c3c3cff',
        padding: 12,
    },

    img_cards: {
        display: "flex",
    },

    img: {
        width: 80,
        height: 100,
        objectFit: 'contain',
    },

    text_cards: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 12,
    },

    titul: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffffff',
        paddingBottom: 10,
    },

    descri: {
        fontSize: 15,
        textAlign: "left",
        color: '#ffffffff',
    }

});
