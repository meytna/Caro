import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../../config/const";
import { styles } from "../../style/styles";

const Square = ({ row, col }) => {
  return <View >
    <TouchableHighlight
      onPress={() => console.log(row, col)}
      style={styles.cell}
      underlayColor="#ccc"
    // disabled
    >
      <Text></Text>
    </TouchableHighlight>
  </View>
}

const Row = ({ row }) => {
  return <View style={{ flexDirection: "row" }}>
    {
      new Array(NUMBER_OF_COLUMNS)
        .fill(0)
        .map((_, col) => <Square key={col} row={row} col={col} />)
    }
  </View>
}

const Board = () => {
  return <View style={styles.mainBackground}>
    <View style={[styles.board, { flexDirection: "column" }]}>
      {
        new Array(NUMBER_OF_ROWS)
          .fill(0)
          .map((_, row) => <Row key={row} row={row} />)
      }
    </View>
  </View>
}

export default Board;