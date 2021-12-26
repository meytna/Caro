import React from "react";
import { Image, StyleSheet } from "react-native";
import { CELL_LENGTH } from "../config/const";


const style = StyleSheet.create({
  cellItems: {
    width: CELL_LENGTH - 10,
    height: CELL_LENGTH - 10
  },
  actionButtons: {
    width: 24,
    height: 24
  },
  avatarImages: {
    width: 46,
    height: 46
  },
  winUnits: {
    width: 30,
    height: 30
  },
  winIcons: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginBottom: 10
  }
})

export const CircleIcon = () => <Image source={require('./round.png')} style={style.cellItems} />

export const CrossIcon = () => <Image source={require('./delete-cross.png')} style={style.cellItems} />

export const NewGameIcon = () => <Image source={require('./app.png')} style={style.actionButtons} />

export const BackIcon = () => <Image source={require('./back.png')} style={style.actionButtons} />

export const ForwardIcon = () => <Image source={require('./forward.png')} style={style.actionButtons} />

export const SettingsIcon = () => <Image source={require('./configuration-gears.png')} style={style.actionButtons} />

export const ManAvatarIcon = () => <Image source={require('./man.png')} style={style.avatarImages} />

export const WinCircleIcon = () => <Image source={require('./round.png')} style={style.winUnits} />

export const WinCrossIcon = () => <Image source={require('./delete-cross.png')} style={style.winUnits} />

export const WinIcon = () => <Image source={require('./win.png')} style={style.winIcons} />
