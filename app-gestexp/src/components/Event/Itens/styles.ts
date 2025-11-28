import { StyleSheet } from 'react-native';
import { Themes } from '../../../../theme/themes';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Themes.colors.white_cinze,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10,
    },

    textItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    text: {
        fontSize: Themes.fonts.size.destc,
        fontWeight: 800,
        color: Themes.colors.cinze,
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

})