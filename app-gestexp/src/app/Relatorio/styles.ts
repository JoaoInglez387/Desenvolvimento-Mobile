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
        marginBottom: 25,
    },

    header: {
        width: "100%",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },

    resumoGeral: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column',
        width: "100%",
        flexWrap: 'wrap',
        padding: 10,
        gap: 20
    },

    resumoTitl: {
        fontSize: Themes.fonts.size.title_2,
        fontWeight: "600",
        marginBottom: 5,
        color: Themes.colors.dark,
    },

    cardsDados: {
        display: "flex",
        alignItems: "center",
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        width: "100%",
        gap: 10
    },

    cardsQtd: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        width: "100%",
        gap: 20
    },

    cards: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        padding: 15,
        borderRadius: 5,
        flex: 1,
        height: 80, 
    },
    
    cardsResTitl: {
        fontWeight: "800",
        fontSize: Themes.fonts.size.destc,
        color: Themes.colors.cinze,
        marginBottom: 10,
    },

    cardsResDescri: {
        fontWeight: "600",
        fontSize: Themes.fonts.size.descri,
        color: Themes.colors.cinze,
    },

    cardConetener: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 15,
        marginTop: 30,
        marginBottom: 15,
        width: "100%",
    },

    card: {
        display: "flex",
        width: "90%",
        backgroundColor: Themes.colors.siste,
        padding: 15,
        borderRadius: 8,
        boxShadow: "0 1px 3px #C2C4CC",
        gap: 4,
    },

    cardTitle: {
        fontSize: Themes.fonts.size.title,
        fontWeight: "600",
        marginBottom: 5,
        color: Themes.colors.dark,
    },

    descriCard: {
        fontSize: Themes.fonts.size.descri,
        fontWeight: "400",
        color: Themes.colors.dark,
    },

    linha: {
        width: "100%",
        height: 1,
        backgroundColor: Themes.colors.linha,
        marginVertical: 10
    },

    colorEntra: {
        color: Themes.colors.green,
    },

    colorSaida: {
        color: Themes.colors.red,
    },

    titul: {
        fontSize: Themes.fonts.size.title_1,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.dark,
    },
    
});