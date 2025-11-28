import { StyleSheet } from 'react-native';
import { Themes } from "../../../theme/themes";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Themes.colors.siste,
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    img: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },

    headerContener: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        width: "100%",
        height: 180,
        overflow: "hidden",
        borderBottomWidth: 6,
        borderBottomColor: Themes.colors.blue_viol,
    },

    headerText: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: 'center',
        gap: 15,
    },

    containerNav: {
        display: "flex",
        alignItems: "flex-start",
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
        fontSize: Themes.fonts.size.title_dest,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.siste,
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 3,
        paddingBottom: 3,
        backgroundColor: Themes.colors.blue_viol,
    },

    subtitul: {
        fontSize: Themes.fonts.size.title,
        textAlign: "left",
        fontWeight: 'bold',
        color: Themes.colors.dark,
        paddingTop: 15
    },

    descri: {
        fontSize: Themes.fonts.size.descri_1,
        textAlign: "left",
        color: Themes.colors.siste,
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
        fontSize: Themes.fonts.size.destc,
    },

    buttonPrim: {
        backgroundColor: Themes.colors.blue,
    },

    buttonSeg: {
        backgroundColor: Themes.colors.ciano,
    },

    buttoTerc: {
        backgroundColor: Themes.colors.roxo,
    },

});