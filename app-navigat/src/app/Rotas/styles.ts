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
        gap: 10,
        marginTop: "auto",
        marginBottom: "auto"
    },

    titul: {
        fontSize: 24,
        paddingBottom: 20,
    },

    descri: {
        fontSize: 14,
        textAlign: 'center'
    }

});