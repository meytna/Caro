import React from "react";
import { View, Text, Image } from "react-native";
import { CircleIcon, CrossIcon, ManAvatarIcon } from "../../image/images";
import { playerCard } from "../../style/styles";

const PlayerLeft = ({ playerLeft }) => {
  return <View style={[playerCard.card, playerCard.leftCard]}>
    <View style={playerCard.image} ><ManAvatarIcon /></View>
    <View style={{ marginLeft: 10 }}>
      <Text>{playerLeft.name}</Text>
      <Text>{playerLeft.unit === 1 ? <CrossIcon /> : <CircleIcon />}</Text>
    </View>
  </View>
}

export default PlayerLeft;