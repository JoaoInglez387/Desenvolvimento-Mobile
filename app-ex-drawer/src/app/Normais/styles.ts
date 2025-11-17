import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: Themes.colors.padrao,
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 25,
        marginTop: "auto",
        marginBottom: "auto"
    },

    titul: {
        fontSize: 24,
    },

    descri: {
        fontSize: 14,
    }


});
