import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#FFC273",
        paddingTop: 10,
        paddingBottom: 5,
        gap: 10,
    },

    textItem: {
        display: "flex",
        textAlign: "left",
        fontSize: 16,
        fontWeight: "bold",
        color: "#442D22",
        width: '77%',
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF7A00",
        color: "white",
        borderRadius: 8,
        borderWidth: 5,
        borderColor: "#FF7A00",
    },

})