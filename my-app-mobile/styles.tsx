import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    titulo_container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 3,
    },

    text_titul: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 20,

    },

    text_legend: {
        fontSize: 17,
        textAlign: 'left',
        color: "#48bfff",
        paddingBottom: 10,
    },

    input: {
        textAlign: 'left',
        color: "black",
        borderWidth: 2,
        borderColor: "#6dccff",
        borderRadius: 13,
        marginBottom: 15,
        width: 380
    },

    buttonText: {
        backgroundColor: "#4fc1ff",
        width: 56,
        height: 56,
    },

});
