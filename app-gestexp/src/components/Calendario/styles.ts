import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener_calendario: {
        display: 'flex',
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 8,
    },

    minCalendario: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 12,
        width: "100%",
        elevation: 3,
    },

    titulCalendario: {
        fontSize: 20,
        fontWeight: "700",
        color: "#2467a5",
        marginBottom: 4,
    },

    subTitulCalendario: {
        fontSize: 16,
          color: "#555",
          marginBottom: 10,
          textTransform: "capitalize",
    },
});
