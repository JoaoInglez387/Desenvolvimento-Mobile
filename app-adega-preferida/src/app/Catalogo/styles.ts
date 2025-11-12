import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff',
        padding: 15,
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    contener_cards: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        paddingBottom: 15,
    },

    scroll_container: {
        width: '100%',
        flexGrow: 1,
    },

    text: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 15,
        marginBottom: 15,
    },

    titul: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
    },

    descri: {
        fontSize: 18,
        lineHeight: 22,
        textAlign: "left",
        color: '#383838ff',
    }

});