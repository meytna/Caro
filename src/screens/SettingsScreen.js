import React, { useEffect } from "react";
import { BackHandler, Button, Text, View } from "react-native";
import { styles } from "../style/styles";

const SettingsSCreen = (props) => {
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
    <Text>Settings</Text>
    {/* <Button title="play" onPress={() => history.push("/select-type")} /> */}
  </View>
}

export default SettingsSCreen;