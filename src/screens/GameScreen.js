import React, { useEffect } from "react";
import { BackHandler, Text, View } from "react-native";
import Board from "../components/Board/Board";
// import { styles } from "../style/styles";
import Game from "../Game/Game";

const GameScreen = (props) => {
  const { history } = props;

  const backAction = () => {
    history.goBack();
    return true;
  }

  const game = new Game("type", "2");
  console.log("game:", game.getType());

  // console.log({ a: 1, b: "a" })

  useEffect(() => {

  }, [])
  // Game1.hi();

  // const a = new Game(1)

  // console.log(game.getType())

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [])
  return <View style={{ backgroundColor: "#bbb", height: "100%" }}>
    <Board />
  </View>
}

export default GameScreen;