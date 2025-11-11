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
        flex: 1,
        backgroundColor: '#e07d7dff',
        paddingLeft: 25,
        paddingRight: 25,
        gap: 20,
    },

    text: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 15,
        marginTop: 15,
        marginBottom: 15,
    },

    titul: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
    },

    descri: {
        fontSize: 19,
        textAlign: "left",
        color: '#383838ff',
    }


});