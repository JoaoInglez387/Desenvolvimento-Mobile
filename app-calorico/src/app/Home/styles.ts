import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#e6e6e6cb',
    },

    main: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginBottom: 30,
    },

    caberacio_container: {
        display: "flex",
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 15,
    },

    contener_person: {
        display: 'flex',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20,
        width: "85%",
    },

    contener_list: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffffff",
        boxShadow: "0 1px 3px #C2C4CC",
        borderColor: "#797A80",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        gap: 12,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        marginBottom: 10,
    },

    contener_resultado: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffffff",
        boxShadow: "0 1px 3px #C2C4CC",
        borderColor: "#797A80",
        borderRadius: 10,
        padding: 15,
        marginLeft: "auto",
        marginRight: 10,
    },

    legenda_tablet: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingBottom: 7,
        marginBottom: 5,
    },

    text_titul: {
        textAlign: "center",
        fontSize: 29,
        fontWeight: "bold",
        color: "#352DA6",
        paddingBottom: 15,
    },

    item_leg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    item: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2D4BA6",
    },

    caloria_leg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    caloria: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2D97A6",
    },

    buttonDelet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
    },

    textButton: {
        fontSize: 16,
        fontWeight: "700",
        color: "#A6452D",
    },

    text_total: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "700",
        color: "#232326",
    },

});
