import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10,
    },

    textItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#232326",
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

})