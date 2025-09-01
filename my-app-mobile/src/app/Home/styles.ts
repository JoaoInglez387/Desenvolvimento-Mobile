import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    titulo_container: {
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
        marginBottom: 20,
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
        flex: 1,
        textAlign: 'left',
        color: "black",
        borderWidth: 2,
        borderColor: "#6dccff",
        borderRadius: 8,
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4fc1ff",
        borderRadius: 8,
        width: 45,
        height: 45,
    },

    buttonText: {
        fontSize: 17,
        color: "white",
    }

});
