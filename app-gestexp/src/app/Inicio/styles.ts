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
        alignItems: "flex-start",
        flexDirection: "column",
        backgroundColor: "#25679cff",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        gap: 15,
    },

    containerNav: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: 10
    },

    resumoContener: {
        display: "flex",
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center',
        flexDirection: "row",
        padding: 30,
        paddingBottom: 15,
        gap: 25
    },

    calendarioView: {
        display: "flex",
        alignItems: "center",
        padding: 10
    },

    buttonsNavegat: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        width: "100%",
        marginTop: 15,
        marginBottom: 15,
    },

    titul: {
        fontSize: 38,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#000000',
    },

    subtitul: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#000000',
        paddingTop: 15
    },

    descri: {
        fontSize: 18,
        textAlign: "left",
        color: '#000000',
    },

    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "100%",
        height: 50,
        padding: 10,
        gap: 10
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