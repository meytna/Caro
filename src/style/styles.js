import { StyleSheet } from "react-native";
import { CELL_LENGTH } from "../config/const";

export const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#36e7f4",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gameBackground: {
    backgroundColor: "#36e7f4",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    margin: 6,
    backgroundColor: "#ffffff",
    width: 210,
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "red",
    elevation: 5
  },
  buttonTitle: {
    color: "red",
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  board: {
    borderWidth: 2,
    borderColor: "#222",
    backgroundColor: "#eee"
  },
  cell: {
    borderWidth: 0.5,
    borderColor: "#777",
    width: CELL_LENGTH,
    height: CELL_LENGTH,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.4)"
  },
  modalView: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#666",
    borderRadius: 10,
    borderWidth: 2,
    elevation: 4
  },
  winnerModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 150,
    flexDirection: "row"
  },
  settingModal: {
    paddingHorizontal: 20,
    width: 300,
    paddingVertical: 30
    // height: 500
  }
});

export const playerCard = StyleSheet.create({
  playerCard: {
    width: "100%",
    flexDirection: "row",
    padding: 2,
    marginBottom: 6
  },
  scoreCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 5
  },
  scoreText: {
    textAlign: "center",
    fontWeight: "700",
    color: "red",
    fontSize: 20,
  },
  card: {
    flex: 2,
    height: 50,
    alignItems: "center"
  },
  leftCard: {
    flexDirection: "row"
  },
  rightCard: {
    flexDirection: "row-reverse"
  },
  image: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    borderWidth: 1,
    width: 50,
    height: 50
  }
})

export const actionCard = StyleSheet.create({
  actionCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginTop: 5
  },
  button: {
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    marginHorizontal: 3,
    borderRadius: 4,
    borderColor: "#666",
    borderWidth: 1,
    elevation: 3
  }
})

export const modalStyle = StyleSheet.create({
  title: {
    paddingVertical: 5
  },
  input: {
    borderWidth: 1,
    height: 30,
    padding: 2,
    paddingHorizontal: 10
  },
  button: {
    // margin: 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#888",
    borderRadius: 4,
    width: 60,
    height: 32
  }
})