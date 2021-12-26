import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { BackHandler, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style/styles";

const SelectTypeGameScreen = (props) => {
  const { history, t } = props;
  const [law, setLaw] = useState(1);

  const loadLaw = async () => {
    const law = await AsyncStorage.getItem("Storage_law") === "fs" ? 1 : 2;
    setLaw(law)
  }
  useEffect(() => {
    loadLaw();
  }, [])

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
      onPress={() => history.push("/game", { type: 2, law: law })}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("SelectTypeGame.VsComputer")}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push("/game", { type: 1, law: law })}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("SelectTypeGame.VsPlayer")}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.goBack()}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("Common.Back")}</Text>
    </TouchableOpacity>
  </View>
}

export default withTranslation()(SelectTypeGameScreen);