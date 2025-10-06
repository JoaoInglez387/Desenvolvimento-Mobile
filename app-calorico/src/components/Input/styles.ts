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
