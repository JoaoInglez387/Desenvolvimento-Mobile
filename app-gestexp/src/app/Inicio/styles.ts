import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: '#ffffffff',
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    headerContener: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingRight: 20,
        paddingLeft: 20,
        gap: 15,
    },

    containerNav: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: 10
    },

    resumoContener: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        padding: 30,
        paddingBottom: 15,
    },

    calendarioView: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row", 
        padding: 10
    },

    buttonsNavegat: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 15,
        marginBottom: 15,
    },

    titul: {
        fontSize: 38,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#000000',
    },

    descri: {
        fontSize: 18,
        textAlign: "center",
        color: '#000000',
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "100%",
        height: 50,
        padding: 10
    },

    buttonText: {
        color: "white",
        fontWeight: 600,
        fontSize: 17,
    },

    buttonPrim: {
        backgroundColor: "#2D4BA6",
    }, 

    buttonSeg: {
        backgroundColor: "#2da2a6ff",
    }, 

    buttoTerc: {
        backgroundColor: "#512da6ff",
    }, 

});