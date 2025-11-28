import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    contener_box: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 8,
    },

    titul: {
        fontWeight: "800",
        fontSize: Themes.fonts.size.destc,
        color: Themes.colors.cinze,
        marginBottom: 10,
    },

    box: {
        textAlign: 'center',
        fontWeight: "700",
        fontSize: Themes.fonts.size.descri,
        color: Themes.colors.cinze,
        backgroundColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        padding: 15,
        borderRadius: 5,
        width: "100%",
        height: 50, 
    },

});
