import React, { useEffect, useState } from "react";
import { BackHandler, Text, View } from "react-native";
import Board from "../components/Board/Board";
// import { styles } from "../style/styles";
import Game from "../Game/Game";
import useGame from "../Game/useGame";


const GameScreen = (props) => {
  const { history } = props;

  const backAction = () => {
    history.goBack();
    return true;
  }
  // const game2 = useState(new Game("type", "2"))
  // var game = new Game("type", "2");
  // console.log("game", game2.getGame());
  // console.log(game)

  const game = useGame(1, 1);
  console.log(game)

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [])
  return <View style={{ backgroundColor: "#bbb", height: "100%" }}>
    <Board game={game} />
  </View>
}

export default GameScreen;