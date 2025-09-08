import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        backgroundColor: '#ffffff',
        marginLeft: 7,
        marginRight: 7,
    },

    caberacio_container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },

    contener_person: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%"
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        marginBottom: 15,
    },

    contener_resultado: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#DEEFE7",
        borderColor: "#159A9C",
        borderWidth: 2,
        borderRadius: 10,
        gap: 10,
        padding: 10,
        marginBottom: "20%"
    },

    contener_salve: {
        display: "flex",
        width: "60%"
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
        color: "#159A9C",
        paddingBottom: 10,
    },

    input: {
        flex: 1,
        textAlign: 'left',
        color: "#002333",
        borderWidth: 2,
        borderColor: "#159A9C",
        borderRadius: 8,
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#159A9C",
        color: "white",
        borderRadius: 8,
        width: 45,
        height: 45,
    },

    buttonText: {
        textAlign: "center",
        fontSize: 17,
        color: "white",
    },

});
