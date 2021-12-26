import React from "react";
import { withTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { styles } from "../style/styles";

const localStyle = StyleSheet.create({
  mainText: {
    color: "#f44336",
    fontSize: 26,
    marginTop: 40
  }
})

const GetStartedScreen = (props) => {
  // console.log("props", props);
  const { t } = props;

  return <Link to="/menu">
    <View style={styles.mainBackground}>
      <Text style={localStyle.mainText}>
        {"Tap To Play"}
      </Text>
    </View>
  </Link>
}

export default withTranslation()(GetStartedScreen);