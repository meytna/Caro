import React, { useEffect } from "react";
import { BackHandler, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style/styles";

const SelectTypeGameScreen = (props) => {
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
      onPress={() => history.push("/game")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>PvC</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push("/game")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>PvP</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.goBack()}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>Back</Text>
    </TouchableOpacity>
  </View>
}

export default SelectTypeGameScreen;