import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: Themes.colors.white_smoke,
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
        paddingTop: 30,
        padding: 30,
        paddingBottom: 15,
    },

    contener_person: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        height: "100%"
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
        fontSize: Themes.fonts.size.text,
        color: Themes.colors.cinze,
        backgroundColor: Themes.colors.siste,
        borderColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        marginBottom: 10,
        borderRadius: 8,
        width: "100%",
    },

    drowpData: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: Themes.colors.siste,
        borderColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        paddingLeft: 9,
        marginBottom: 10,
        borderRadius: 8,
        width: "100%",
        height: 45,
    },

    drowpDataText: {
        textAlign: 'left',
        fontWeight: "400",
        fontSize: Themes.fonts.size.text,
        color: Themes.colors.cinze,
    },

    contener_list: {
        display: "flex",
        flex: 1,
        height: 110,
        alignItems: "center",
        backgroundColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        borderColor: Themes.colors.border,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        gap: 12,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        marginBottom: 5,
    },

    legenda_tablet: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 15,
        borderBottomWidth: 1,
        borderBottomColor: Themes.colors.white_cinze,
        paddingBottom: 7,
        marginBottom: 5,
    },

    text_titul: {
        textAlign: "center",
        fontSize: Themes.fonts.size.title_1,
        fontWeight: "bold",
        color: Themes.colors.roxo,
        paddingBottom: 15,
    },

    tab_leg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    data: {
        fontSize: Themes.fonts.size.descri,
        fontWeight: "700",
        color: Themes.colors.button_color,
    },

    tipo: {
        fontSize: Themes.fonts.size.descri,
        fontWeight: "700",
        color: Themes.colors.ciano,
    },

    descri: {
        fontSize: Themes.fonts.size.descri,
        fontWeight: "700",
        color: Themes.colors.blue_aqua,
    },

    buttonDelet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    valor: {
        fontSize: Themes.fonts.size.descri,
        fontWeight: "700",
        color: Themes.colors.blue,
    },

    textButton: {
        fontSize: Themes.fonts.size.descri,
        fontWeight: "700",
        color: Themes.colors.red,
    },

});