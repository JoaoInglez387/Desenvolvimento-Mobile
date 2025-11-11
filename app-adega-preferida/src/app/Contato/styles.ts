import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#e6e6e6cb',
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    text: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    titul: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#272727ff',
        paddingBottom: 10,
    },

    descri: {
        fontSize: 14,
        lineHeight: 22,
        textAlign: "left",
        color: '#ffffffff',
    }


});