import React, { useEffect } from "react";
import { BackHandler, Text, View } from "react-native";
import { styles } from "../style/styles";

const Board = (props) => {
  const { history } = props;

  const backAction = () => {
    history.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [])
  return <View style={styles.mainBackground}>
    <Text>Board</Text>
  </View>
}

export default Board;