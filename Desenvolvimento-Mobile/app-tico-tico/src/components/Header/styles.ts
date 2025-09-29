import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#FFA200",
    display: "flex",
    height: 90,
    paddingTop: 10,
    paddingHorizontal: 16,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
  },
});