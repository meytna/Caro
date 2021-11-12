import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#36e7f4",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 6,
    backgroundColor: "#ffffff",
    width: 180,
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "red",
    elevation: 5
  },
  buttonTitle: {
    color: "red",
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase",
  }
});