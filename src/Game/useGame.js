import { useState } from "react"
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../config/const";

const useGame = (_type, _whoStart) => {
  const [type, setType] = useState(_type || 1); //1: freestyle-caro, 2: standard-caro
  const [whoStart, setWhoStart] = useState(_whoStart || 1); //1: 
  const [turn, setTurn] = useState(1); //1: x, 0: o
  const [board, setBoard] = useState(
    new Array(NUMBER_OF_ROWS)
      .fill()
      .map(() => new Array(NUMBER_OF_COLUMNS).fill(-1))
  ); // 1: x, 0: o, -1: empty

  const getTurn = () => {
    return turn;
  }

  const go = (row, col) => {
    let tmp = [...board];
    if (tmp[row][col] === -1) {
      if (turn === 1) {
        tmp[row][col] = 1
        setTurn(0);
      } else {
        tmp[row][col] = 0;
        setTurn(1);
      }
    }
    setBoard(tmp);
  }

  const checkWin = (type, row, col) => {
    return
  }

  return {
    type,
    whoStart,
    turn,
    board,
    go,
  }
}

export default useGame;