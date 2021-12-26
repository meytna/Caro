import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../style/styles";
import { withTranslation } from "react-i18next";

const MainMenuScreen = (props) => {
  const { history, t } = props;
  // console.log("props", props);

  return <View style={styles.mainBackground}>
    <TouchableOpacity
      onPress={() => history.push("/select-type")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("MainMenu.Play")}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => null}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("MainMenu.About")}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push("/settings")}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>{t("MainMenu.Settings")}</Text>
    </TouchableOpacity>
  </View>
}

export default withTranslation()(MainMenuScreen);