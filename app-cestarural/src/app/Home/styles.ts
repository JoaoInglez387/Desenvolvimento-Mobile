import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 40,
    },

    titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    form: { width: "90%", marginBottom: 10 , paddingBottom: 15, borderBottomColor: "#327B43", borderBottomWidth: 3},

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        marginBottom: 5,
    },

    addBtn: {
        backgroundColor: "#28a745",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },

    nome: { fontWeight: "bold", fontSize: 16 },
    produtor: { color: "#555" },
    preco: { color: "green" },
    qtdContainer: { flexDirection: "row", alignItems: "center" },

    botao: {
        backgroundColor: "#e53935",
        borderRadius: 20,
        width: 28,
        alignItems: "center",
    },

    botaoTxt: { color: "white", fontSize: 16, fontWeight: "bold" },
    qtd: { marginHorizontal: 8, fontSize: 16 },
    resumo: {
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: "#327B43",
        paddingTop: 8,
        width: "90%",
    },

    total: { color: "green", fontWeight: "bold", fontSize: 18 },
});