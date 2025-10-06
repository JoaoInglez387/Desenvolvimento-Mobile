import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  caberacio_container: {
    display: "flex",
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingBottom: 20,
  },

  contener_person: {
    display: 'flex',
    justifyContent: 'center',
    width: "100%",
  },

  contener_input: {
    display: 'flex',
    alignItems: "center",
    flexDirection: "column",
    gap: 8,
    marginBottom: 15,
  },

  contener_resultado: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#E2E2E2",
    borderRadius: 20,
    gap: 12,
    padding: 10,
  },

  text_titul: {
    textAlign: "left",
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 20,
  },

  input: {
    flex: 1,
    textAlign: 'left',
    fontWeight: "500",
    color: "black",
    backgroundColor: "white",
    padding: 15,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#CCCCCC",
  },

  resultados: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "500",
    textAlign: "center",
  }
});
