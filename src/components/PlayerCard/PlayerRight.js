import React from "react";
import { View, Text } from "react-native";
import { CircleIcon, CrossIcon, ManAvatarIcon } from "../../image/images";
import { playerCard } from "../../style/styles";

const PlayerRight = ({ playerRight }) => {
  return <View style={[playerCard.card, playerCard.rightCard]}>
    <View style={playerCard.image} ><ManAvatarIcon /></View>
    <View style={{ marginRight: 10, alignItems: "flex-end" }}>
      <Text>{playerRight.name}</Text>
      <Text>{playerRight.unit === 1 ? <CrossIcon /> : <CircleIcon />}</Text>
    </View>
  </View>
}

export default PlayerRight;