import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        flex: 1,
        alignItems: "flex-start",
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
    },

})