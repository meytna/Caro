import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BackIcon, ForwardIcon, NewGameIcon, SettingsIcon } from "../../image/images";
import { actionCard } from "../../style/styles";

const ActionCard = ({ game, newGame, openSettingModal }) => {
  return <View style={[actionCard.actionCard]}>
    <TouchableOpacity
      onPress={() => { newGame() }}
      style={actionCard.button}
      activeOpacity={0.8}
    >
      <NewGameIcon />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => { game.backHistory() }}
      style={actionCard.button}
      activeOpacity={0.8}
    >
      <BackIcon />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => { game.forwardHistory() }}
      style={actionCard.button}
      activeOpacity={0.8}
    >
      <ForwardIcon />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => { openSettingModal() }}
      style={actionCard.button}
      activeOpacity={0.8}
    >
      <SettingsIcon />
    </TouchableOpacity>
  </View>
}

export default ActionCard;