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
        marginBottom: 20,
        marginTop: 20,
    },

    contener_person: {
        display: 'flex',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        paddingTop: 30,
        paddingBottom: 15,
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20,
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

    text_titul: {
        textAlign: "center",
        fontSize: Themes.fonts.size.title_2,
        fontWeight: "bold",
        color: Themes.colors.roxo,
        paddingBottom: 5,
    },

    text_descri: {
        textAlign: "center",
        fontSize: Themes.fonts.size.destc,
        fontWeight: 700,
        color: Themes.colors.ciano,
        paddingBottom: 5,
    },

    valor: {
        textAlign: "center",
        fontSize: Themes.fonts.size.title_2,
        fontWeight: "bold",
        color: Themes.colors.dark,
        paddingBottom: 10,
    }

});