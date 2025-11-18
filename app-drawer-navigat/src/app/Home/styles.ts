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
        gap: 15,
        marginTop: "auto",
        marginBottom: "auto",
        padding: 10,
    },

    titul: {
        fontSize: Themes.fonts.size.title,
        fontWeight: 'bold',
        paddingBottom: 15,
    },

    descri: {
        fontSize: Themes.fonts.size.text,
        lineHeight: 20,
        textAlign: 'center'
    }

});
