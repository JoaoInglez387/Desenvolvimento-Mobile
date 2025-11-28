import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    contener_calendario: {
        display: 'flex',
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 8,
    },

    minCalendario: {
        backgroundColor: Themes.colors.siste,
        padding: 12,
        borderRadius: 12,
        width: "100%",
        elevation: 3,
    },

    titulCalendario: {
        fontSize: Themes.fonts.size.title_3,
        fontWeight: "700",
        color: Themes.colors.blue,
        marginBottom: 4,
    },

    subTitulCalendario: {
        fontSize: Themes.fonts.size.text,
          color: Themes.colors.cinze,
          marginBottom: 10,
          textTransform: "capitalize",
    },
});
