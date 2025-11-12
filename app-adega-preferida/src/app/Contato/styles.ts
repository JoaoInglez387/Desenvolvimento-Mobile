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

    contener_contat: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
        paddingBottom: 30,
    },

    text: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 20,
    },

    titul: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: "left",
        color: '#000000',
        paddingBottom: 10,
    },
 
});