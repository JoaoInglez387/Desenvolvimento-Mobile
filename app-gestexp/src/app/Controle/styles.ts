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
        marginBottom: 10,
    },

    caberacio_container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        padding: 30,
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
        marginBottom: 15,
        width: "85%",
    },

    drowp: {
        textAlign: 'left',
        fontWeight: "500",
        fontSize: 15,
        color: "#232326",
        backgroundColor: "#ffffffff",
        borderColor: "#ffffffff",
        boxShadow: "0 1px 3px #C2C4CC",
        marginBottom: 10,
        borderRadius: 8,
        width: "100%",
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        marginBottom: 10,
    },

    legenda_tablet: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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

    tab_leg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    data: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2D4BA6",
    },

    tipo: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2D97A6",
    },

    descri: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2D97A6",
    },

    buttonDelet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    textButton: {
        fontSize: 16,
        fontWeight: "700",
        color: "#A6452D",
    },

});