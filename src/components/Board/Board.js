import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { CircleIcon, CrossIcon } from "../../image/images";
import { styles } from "../../style/styles";

const Cell = ({ game, row, col }) => {
  return <View>
    <TouchableHighlight
      onPress={() => { game.go(row, col) }}
      style={styles.cell}
      underlayColor="#ccc"
      disabled={game.board[row][col] === -1 ? false : true}
    >
      <Text>
        {game.board[row][col] === 1 && <CrossIcon />}
        {game.board[row][col] === 0 && <CircleIcon />}
      </Text>
    </TouchableHighlight>
  </View>
}

const Row = ({ game, row }) => {
  return <View style={{ flexDirection: "row" }}>
    {
      game.board[row].map((_, col) => <Cell
        key={col}
        game={game}
        row={row}
        col={col}
      />)
    }
  </View>
}

const Board = ({ game }) => {
  return <View style={[styles.board, { flexDirection: "column" }]}>
    {
      game.board.map((_, row) => <Row
        key={row}
        game={game}
        row={row}
      />)
    }
  </View>
}

export default Board;