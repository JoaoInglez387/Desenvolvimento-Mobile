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
        flexDirection: "column",
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
    },

    contener_person: {
        display: 'flex',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        paddingTop: 30,
        paddingBottom: 15,
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20,
        width: "85%",
    },

    contener_resultado: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        backgroundColor: "#ffffffff",
        boxShadow: "0 1px 3px #C2C4CC",
        borderColor: "#797A80",
        borderRadius: 10,
        padding: 15,
    },

    text_titul: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#352DA6",
        paddingBottom: 5,
    },

    text_descri: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: 700,
        color: "#2da69cff",
        paddingBottom: 5,
    },

    valor: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#000000ff",
        paddingBottom: 10,
    }

});