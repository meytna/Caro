import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { BackHandler, Modal, Pressable, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import ActionCard from "../components/ActionCard/ActionCard";
import Board from "../components/Board/Board";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import useGame from "../Game/useGame";
import { WinCircleIcon, WinCrossIcon, WinIcon } from "../image/images";
import { modalStyle, styles } from "../style/styles";


const GameScreen = (props) => {
  const { history, location, t } = props;

  const [playerLeft, setPlayerLeft] = useState({
    name: "Player 1",
    unit: 1, //1: x, 0: o
    score: 0
  });
  const [playerRight, setPlayerRight] = useState({
    name: "Player 2",
    unit: 0,
    score: 0
  })
  const game = useGame(location.state.law, location.state.type, playerRight.unit);

  const [winnerModalVisible, setWinnerModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    playerLeft: "",
    playerRight: "",
    unitLeft: true
  })

  const openSettingModal = () => {
    setModalData({
      ...modalData,
      playerLeft: playerLeft.name,
      playerRight: playerRight.name,
      unitLeft: playerLeft.unit === 1 ? true : false
    });
    setSettingsModalVisible(true)
  }

  const clickOkModal = () => {
    setPlayerLeft({ ...playerLeft, name: modalData.playerLeft, unit: modalData.unitLeft ? 1 : 0 });
    setPlayerRight({ ...playerRight, name: modalData.playerRight, unit: modalData.unitLeft ? 0 : 1 });
    setSettingsModalVisible(false)
  }

  const newGame = () => {
    game.newGame(2, location.state.type, playerRight.unit);
  }

  const handleWin = () => {
    if (game.win !== -1) {
      setWinnerModalVisible(true);
      if (playerLeft.unit === game.win) {
        setPlayerLeft({ ...playerLeft, score: playerLeft.score + 1 });
      } else {
        setPlayerRight({ ...playerRight, score: playerRight.score + 1 });
      }
    }
  }

  useEffect(() => {
    if (game.turn === playerRight.unit && location.state.type === 2) {
      game.computerGo();
    }
  }, [game.turn])

  useEffect(() => {
    handleWin();
  }, [game.win])

  const backAction = () => {
    history.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return <View style={styles.gameBackground}>
    <ActionCard game={game} newGame={newGame} type={location.state.type} openSettingModal={openSettingModal} />
    <Board game={game} />
    <PlayerCard playerLeft={playerLeft} playerRight={playerRight} />

    <Modal
      visible={winnerModalVisible}
      transparent={true}
      onRequestClose={() => { setWinnerModalVisible(false) }}
    >
      <Pressable
        style={styles.centeredView}
        onPress={() => setWinnerModalVisible(false)}
      >
        <View style={[styles.modalView, styles.winnerModal]}>
          {game.win === 0 && <WinCircleIcon />}
          {game.win === 1 && <WinCrossIcon />}
          <WinIcon />
        </View>
      </Pressable>
    </Modal>

    <Modal
      visible={settingsModalVisible}
      transparent={true}
      onRequestClose={() => { setSettingsModalVisible(false) }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, styles.settingModal]}>
          <Text style={modalStyle.title}>{t("Game.Player1Name")}:</Text>
          <TextInput
            style={modalStyle.input}
            maxLength={10}
            value={modalData.playerLeft}
            onChangeText={(text) => setModalData({ ...modalData, playerLeft: text })}
          />
          <Text style={modalStyle.title}>{t("Game.Player2Name")}:</Text>
          <TextInput
            style={modalStyle.input}
            maxLength={10}
            value={modalData.playerRight}
            onChangeText={(text) => setModalData({ ...modalData, playerRight: text })}
          />
          <Text style={modalStyle.title}>{t("Game.PlayerStart")}:</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <Text>Player 1</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              value={modalData.unitLeft}
              onValueChange={() => setModalData({ ...modalData, unitLeft: !modalData.unitLeft })}
            />
          </View>
          <View style={{ flexDirection: "row-reverse", marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => { setSettingsModalVisible(false) }}
              style={[modalStyle.button, { marginLeft: 5 }]}
              activeOpacity={0.6}
            >
              <Text style={{ color: "#111" }}>{t("Common.Cancel")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { clickOkModal() }}
              style={[modalStyle.button, { backgroundColor: "#007bff" }]}
              activeOpacity={0.6}
            >
              <Text style={{ color: "#fff" }}>{t("Common.Ok")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  </View>
}

export default withTranslation()(GameScreen);