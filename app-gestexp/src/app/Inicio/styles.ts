import { StyleSheet } from 'react-native';

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
        marginTop: "auto",
        marginBottom: "auto",
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

    descri: {
        fontSize: 18,
        textAlign: "center",
        color: '#ffffffff',
    }

});