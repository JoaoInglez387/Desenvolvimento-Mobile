import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        marginBottom: 20, 
    },

    textEvent: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        textAlign: "left",
        fontSize: 16,
        color: "#48bfff",
        borderWidth: 2,
        borderColor: "#6dccff",
        borderRadius: 8,
        padding: 10
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

})