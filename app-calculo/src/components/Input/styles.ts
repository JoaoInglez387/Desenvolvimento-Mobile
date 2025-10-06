import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        marginBottom: 15,
    },

    input: {
        flex: 1,
        textAlign: 'left',
        fontWeight: "400",
        fontSize: 15,
        color: "black",
        backgroundColor: "white",
        padding: 13,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#E3E3E3",
    },
});
