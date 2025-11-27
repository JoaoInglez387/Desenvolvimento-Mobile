import { StyleSheet } from 'react-native';
import { Themes } from "../../../theme/themes";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: '#ffffffff',
    },

    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute"
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 25,
    },

    text: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingRight: 20,
        paddingLeft: 20,
        gap: 15,
    },

    titul: {
        fontSize: 38,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#ffffffff',
    },

    subtitul: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },

    descri: {
        fontSize: 18,
        textAlign: "center",
        color: '#ffffffff',
    },
    
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#d0d7de",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 8,
        color: "#333",
    },

    textoCalendario: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 10,
        color: "#444",
        alignSelf: "center",
    },

});