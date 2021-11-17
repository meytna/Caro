import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../../style/styles";

const Cell = ({ game, row, col }) => {
  return <View>
    <TouchableHighlight
      onPress={() => { game.go(row, col); console.log(game) }}
      style={styles.cell}
      underlayColor="#ccc"
      disabled={game.board[row][col] === -1 ? false : true}
    >
      <Text>
        {game.board[row][col] === 1 && "x"}
        {game.board[row][col] === 0 && "o"}
      </Text>
    </TouchableHighlight>
  </View>
}

const Row = ({ game, row }) => {
  return <View style={{ flexDirection: "row" }}>
    {
      game.board[row].map((_, col) => <Cell
        game={game}
        row={row}
        col={col}
      />)
    }
  </View>
}

const Board = ({ game }) => {
  return <View style={styles.mainBackground}>
    <View style={[styles.board, { flexDirection: "column" }]}>
      {
        game.board.map((_, row) => <Row
          game={game}
          row={row}
        />)
      }
    </View>
  </View>
}

export default Board;