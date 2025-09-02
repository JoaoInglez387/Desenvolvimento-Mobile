import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
    },

    textEvent: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        textAlign: "left",
        fontSize: 16,
        color: "#002333",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#159A9C",
        borderRadius: 8,
        padding: 10
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF4B4B",
        borderRadius: 8,
        width: 45,
        height: 45,
    },

    buttonText: {
        fontSize: 17,
        fontWeight: "600",
        color: "white",
    }

})