import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    main: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:30
    },

    caberacio_container: {
        display: "flex",
        alignItems: 'flex-start',
        paddingTop: 30,
        paddingBottom: 15,
    },

    contener_person: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        width: "100%",
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
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "#FFEDD4",
        borderColor: "#442D22",
        borderWidth: 2,
        borderRadius: 20,
        gap: 12,
        padding: 10,
    },

    text_titul: {
        textAlign: "left",
        fontSize: 28,
        fontWeight: "bold",
        color: "#442d22",
        paddingBottom: 20,
    },

    input: {
        flex: 1,
        textAlign: 'left',
        fontWeight: "500",
        color: "#442D22",
        backgroundColor: "#FFEDD4",
        padding: 15,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: "#6B4637",
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF7A00",
        color: "white",
        borderRadius: 8,
        width: 55,
        height: 55, 
        borderWidth: 8,
        borderColor: "#FF7A00",
    },

});
