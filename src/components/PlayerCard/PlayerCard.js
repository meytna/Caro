import React from "react";
import { View, Text } from "react-native";
import { playerCard } from "../../style/styles";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";

const PlayerCard = ({ playerLeft, playerRight }) => {
  return <View style={playerCard.playerCard}>
    <PlayerLeft playerLeft={playerLeft} />
    <View style={playerCard.scoreCard}>
      <Text style={[playerCard.scoreText, { flex: 2 }]}>{playerLeft.score}</Text>
      <Text style={[playerCard.scoreText, { flex: 1 }]}>:</Text>
      <Text style={[playerCard.scoreText, { flex: 2 }]}>{playerRight.score}</Text>
    </View>
    <PlayerRight playerRight={playerRight} />
  </View>
}

export default PlayerCard;