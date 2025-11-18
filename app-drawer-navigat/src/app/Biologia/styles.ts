import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: Themes.colors.siste,
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 6,
        marginTop: "auto",
        marginBottom: "auto"
    },

    titul: {
        fontSize: Themes.fonts.size.title,
        paddingBottom: 20,
    },

    subtitul: {
        fontSize: Themes.fonts.size.subtitul,
        fontWeight: '700',
        paddingBottom: 5,
        textAlign: 'left'
    },

    descri: {
        fontSize: Themes.fonts.size.text,
        textAlign: 'center'
    }

});