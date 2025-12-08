import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Themes.colors.siste,
        padding: 10,
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
    },

    contener_person: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        width: "100%",
        paddingTop: 10,
        paddingBottom: 15,
    },

    contener_titul: {
        display: 'flex',
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20,
        gap: 10,
        width: "85%",
    },

    contener_resultado: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        backgroundColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        borderColor: Themes.colors.border,
        borderRadius: 10,
        padding: 15,
    },

    titul: {
        fontSize: Themes.fonts.size.title_dest,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.siste,
    },

    subtitul: {
        fontSize: Themes.fonts.size.title,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.dark,
    },

    descri: {
        fontSize: Themes.fonts.size.title,
        textAlign: "center",
        color: Themes.colors.siste,
    },

    text_titul: {
        textAlign: "center",
        fontSize: Themes.fonts.size.title_val,
        fontWeight: "bold",
        color: Themes.colors.roxo,
        paddingBottom: 5,
    },

    text_descri: {
        textAlign: "center",
        fontSize: Themes.fonts.size.destc,
        fontWeight: 700,
        color: Themes.colors.verde_claro,
        paddingBottom: 5,
    },

    valor: {
        textAlign: "center",
        fontSize: Themes.fonts.size.title_val,
        fontWeight: "bold",
        color: Themes.colors.dark,
        paddingBottom: 10,
    },

});