import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener_cards: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#AB887C',
        borderRadius: 12,
    },

    card: {
        padding: 10,
        flexDirection: "row",
        width: '100%',
    },

    img: {
        width: 60,
        height: 140,
        resizeMode: 'contain',
        marginLeft: 5,
    },

    text_cards: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8,
        marginLeft: 5,
        paddingBottom: 5,
        flex: 1,
    },

    titul: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffffff',
        paddingBottom: 12,
    },

    descri: {
        fontSize: 14,
        lineHeight: 22,
        textAlign: "left",
        color: '#ffffffff',
    }

});
