import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { BackHandler, Text, TouchableOpacity, View } from "react-native";
// import getStorage from "../config/storage";
import { styles } from "../style/styles";

const SettingsSCreen = (props) => {
  const { history, t, i18n } = props;
  // console.log(props);
  const [language, setLanguage] = useState("vi");
  const [law, setLaw] = useState("fs");

  const backAction = () => {
    history.goBack();
    return true;
  }

  const loadLng = async () => {
    let lng = await AsyncStorage.getItem("Storage_lng") || "vi";
    setLanguage(lng);
  }

  const loadLaw = async () => {
    let law = await AsyncStorage.getItem("Storage_law") || "fs";
    setLaw(law);
  }

  const changeLng = async () => {
    const currentLng = await AsyncStorage.getItem("Storage_lng");
    const lng = currentLng === "en" ? "vi" : "en";
    await AsyncStorage.setItem("Storage_lng", lng);
    await i18n.changeLanguage(lng);
    loadLng();
  }

  const changeLaw = async () => {
    const currentLaw = await AsyncStorage.getItem("Storage_law");
    const law = currentLaw === "st" ? "fs" : "st";
    await AsyncStorage.setItem("Storage_law", law);
    loadLaw();
  }

  useEffect(() => {
    loadLng();
    loadLaw();
  }, []);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [])
  return <View style={styles.mainBackground}>
    <TouchableOpacity
      onPress={() => { changeLng() }}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>
        {`${t("Settings.Language.title")}: ${language === "vi" ? t("Settings.Language.value.Vietnamese") : t("Settings.Language.value.English")}`}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => { changeLaw() }}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>
        {`${t("Settings.Law.title")}: ${law === "fs" ? t("Settings.Law.value.Free-style") : t("Settings.Law.value.Standard")}`}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => { history.goBack() }}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonTitle}>
        {t("Common.Back")}
      </Text>
    </TouchableOpacity>
  </View>
}

export default withTranslation()(SettingsSCreen);