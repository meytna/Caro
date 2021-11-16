import React from "react";
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

const GetStartedScreen = () => {
  return <Link to="/menu">
    <View style={styles.mainBackground}>
      <Text style={localStyle.mainText}>
        Tap to Start
      </Text>
    </View>
  </Link>
}

export default GetStartedScreen;