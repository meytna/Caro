import React, { useEffect } from "react";
import { BackHandler, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style/styles";

const SelectTypeGame = (props) => {
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
    <TouchableOpacity
      onPress={() => history.push("/board")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>PvC</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push("/board")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>PvP</Text>
    </TouchableOpacity>
  </View>
}

export default SelectTypeGame;