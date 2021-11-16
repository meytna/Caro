import React, { useEffect } from "react";
import { Text, View, Pressable, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles } from "../style/styles";
import { withTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MainMenuScreen = (props) => {
  const { history, t } = props;
  // console.log("props", props);

  return <View style={styles.mainBackground}>
    <TouchableOpacity
      onPress={() => history.push("/select-type")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("play")}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => null}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>Credit</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push("/settings")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>Settings</Text>
    </TouchableOpacity>
  </View>
}

export default withTranslation()(MainMenuScreen);