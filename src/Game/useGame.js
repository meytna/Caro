import { useState } from "react"
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../config/const";

const useGame = (_law, _type) => {
  const [law, setLaw] = useState(_law || 1); //1: freestyle-caro, 2: standard-caro
  const [type, setType] = useState(_type || 1); // 1: PvP, 2: PvC
  const [turn, setTurn] = useState(1); //1: x, 0: o
  const [win, setWin] = useState(-1); //-1:noone, 0: o, 1: x // react: -1: continue game, 0, 1: stop game
  const [board, setBoard] = useState(
    new Array(NUMBER_OF_ROWS)
      .fill()
      .map(() => new Array(NUMBER_OF_COLUMNS).fill(-1))
  ); // 1: x, 0: o, -1: empty
  const [indexTurn, setIndexTurn] = useState(0);
  const [historyBoard, setHistoryBoard] = useState([
    {
      turn: 1,
      win: -1,
      board: JSON.stringify(
        new Array(NUMBER_OF_ROWS)
          .fill()
          .map(() => new Array(NUMBER_OF_COLUMNS).fill(-1))
      )
    }
  ])

  const newGame = (_law, _type, playerRightUnit) => {
    setLaw(_law || 1);
    setType(_type || 1);
    setWin(-1);
    let tmpBoard = new Array(NUMBER_OF_ROWS)
      .fill()
      .map(() => new Array(NUMBER_OF_COLUMNS).fill(-1));
    if (_type === 2 && playerRightUnit === 1) {
      setTurn(0);
      tmpBoard[14][10] = 1;
      setBoard(
        tmpBoard
      );
      setIndexTurn(1);
      setHistoryBoard([
        {
          turn: 1,
          win: -1,
          board: JSON.stringify(
            new Array(NUMBER_OF_ROWS)
              .fill()
              .map(() => new Array(NUMBER_OF_COLUMNS).fill(-1))
          )
        },
        {
          turn: 0,
          win: -1,
          board: JSON.stringify(
            tmpBoard
          )
        }
      ]);
    } else {
      setTurn(1);
      setBoard(
        tmpBoard
      );
      setIndexTurn(0);
      setHistoryBoard([
        {
          turn: 1,
          win: -1,
          board: JSON.stringify(
            new Array(NUMBER_OF_ROWS)
              .fill()
              .map(() => new Array(NUMBER_OF_COLUMNS).fill(-1))
          )
        }
      ]);
    }

  }

  const go = (row, col) => {
    if (win === -1) {
      let tmp = board;
      if (tmp[row][col] === -1) {
        switch (turn) {
          case 1:
            tmp[row][col] = 1
            setTurn(0);
            break;
          case 0:
            tmp[row][col] = 0;
            setTurn(1);
            break;
          default:
            tmp[row][col] = 1
            setTurn(0);
        }
      }
      setBoard(tmp);
      let _win = checkWin(row, col);
      setIndexTurn(indexTurn + 1);
      setHistoryBoard([...historyBoard.slice(0, indexTurn + 1), { win: _win, turn: turn === 0 ? 1 : 0, board: JSON.stringify(tmp) }]);
    } else {
      return
    }
  }

  const backHistory = () => {
    if (indexTurn > 0) {
      if (type === 2) {
        if (indexTurn - 2 >= 0) {
          setWin(historyBoard[indexTurn - 2].win);
          setTurn(historyBoard[indexTurn - 2].turn);
          setBoard(JSON.parse(historyBoard[indexTurn - 2].board));
          setIndexTurn(indexTurn - 2);
        }
      } else {
        setWin(historyBoard[indexTurn - 1].win);
        setTurn(historyBoard[indexTurn - 1].turn);
        setBoard(JSON.parse(historyBoard[indexTurn - 1].board));
        setIndexTurn(indexTurn - 1);
      }
    } else {
      return
    }
  }

  const forwardHistory = () => {
    if (indexTurn < historyBoard.length - 1) {
      if (type === 2) {
        if (indexTurn - 2 <= historyBoard.length - 1) {
          setWin(historyBoard[indexTurn + 2].win);
          setTurn(historyBoard[indexTurn + 2].turn);
          setBoard(JSON.parse(historyBoard[indexTurn + 2].board));
          setIndexTurn(indexTurn + 2);
        }
      } else {
        setWin(historyBoard[indexTurn + 1].win);
        setTurn(historyBoard[indexTurn + 1].turn);
        setBoard(JSON.parse(historyBoard[indexTurn + 1].board));
        setIndexTurn(indexTurn + 1);
      }
    }
  }

  const getValueMinimax = (row, col) => {
    let minimaxPoint = 0;
    for (let i = 0; i < 5; i++) {
      //horizontal point
      if (!(col + i < 4 || col + i > NUMBER_OF_COLUMNS - 1)) { // true
        let countX = 0;
        let countO = 0;
        for (let j = 0; j < 5; j++) {
          countX = board[row][col + i - j] === 1 ? countX + 1 : countX;
          countO = board[row][col + i - j] === 0 ? countO + 1 : countO;
        }
        let pointX = Math.pow(10, countX);
        let pointO = Math.pow(10, countO);
        if (law === 2 && col + i >= 5 && col + i <= NUMBER_OF_COLUMNS - 2) {
          pointX = (board[row][col + i - 5] === 0 && board[row][col + i + 1] === 0) ? 0 : pointX;
          pointO = (board[row][col + i - 5] === 1 && board[row][col + i + 1] === 1) ? 0 : pointO;
        }
        minimaxPoint += (countX !== 0 && countO !== 0) ? 0 : pointX - pointO;
      }
      //vertical point
      if (!(row + i < 4 || row + i > NUMBER_OF_ROWS - 1)) {
        let countX = 0;
        let countO = 0;
        for (let j = 0; j < 5; j++) {
          countX = board[row + i - j][col] === 1 ? countX + 1 : countX;
          countO = board[row + i - j][col] === 0 ? countO + 1 : countO;
        }
        let pointX = Math.pow(10, countX);
        let pointO = Math.pow(10, countO);
        if (law === 2 && row + i >= 5 && row + i <= NUMBER_OF_ROWS - 2) {
          pointX = (board[row + i - 5][col] === 0 && board[row + i + 1][col] === 0) ? 0 : pointX;
          pointO = (board[row + i - 5][col] === 1 && board[row + i + 1][col] === 1) ? 0 : pointO;
        }
        minimaxPoint += (countX !== 0 && countO !== 0) ? 0 : pointX - pointO;
      }
      //diagontal 1 point
      if (!(row + i < 4 || row + i > NUMBER_OF_ROWS - 1
        || col + i < 4 || col + i > NUMBER_OF_COLUMNS - 1)) {
        let countX = 0;
        let countO = 0;
        for (let j = 0; j < 5; j++) {
          countX = board[row + i - j][col + i - j] === 1 ? countX + 1 : countX;
          countO = board[row + i - j][col + i - j] === 0 ? countO + 1 : countO;
        }
        let pointX = Math.pow(10, countX);
        let pointO = Math.pow(10, countO);
        if (law === 2
          && row + i >= 5 && row + i <= NUMBER_OF_ROWS - 2
          && col + i >= 5 && col + i <= NUMBER_OF_COLUMNS - 2) {
          pointX = (board[row + i - 5][col + i - 5] === 0 && board[row + i + 1][col + i + 1] === 0) ? 0 : pointX;
          pointO = (board[row + i - 5][col + i - 5] === 1 && board[row + i + 1][col + i + 1] === 1) ? 0 : pointO;
        }
        minimaxPoint += (countX !== 0 && countO !== 0) ? 0 : pointX - pointO;
      }
      //diagontal 2 point
      if (!(row - i < 0 || row - i > NUMBER_OF_ROWS - 5
        || col + i < 4 || col + i > NUMBER_OF_COLUMNS - 1)) {
        let countX = 0;
        let countO = 0;
        for (let j = 0; j < 5; j++) {
          countX = board[row - i + j][col + i - j] === 1 ? countX + 1 : countX;
          countO = board[row - i + j][col + i - j] === 0 ? countO + 1 : countO;
        }
        let pointX = Math.pow(10, countX);
        let pointO = Math.pow(10, countO);
        if (law === 2
          && row - i >= 1 && row - i <= NUMBER_OF_ROWS - 6
          && col + i >= 5 && col + i <= NUMBER_OF_COLUMNS - 2) {
          pointX = (board[row - i - 1][col + i + 1] === 0 && board[row - i + 5][col + i - 5] === 0) ? 0 : pointX;
          pointO = (board[row - i - 1][col + i + 1] === 1 && board[row - i + 5][col + i - 5] === 1) ? 0 : pointO;
        }
        minimaxPoint += (countX !== 0 && countO !== 0) ? 0 : pointX - pointO;
      }
    }
    // console.log(minimaxPoint);
    return minimaxPoint;
  }

  const computerGo = () => {
    let highest = { value: 0, row: 0, col: 0 }
    let lowest = { value: 0, row: 0, col: 0 }
    let bestChoice = { row: 0, col: 0 }
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
        if (board[i][j] === -1) {
          let tmpValue = getValueMinimax(i, j);
          highest = (highest.value < tmpValue) ? { value: tmpValue, row: i, col: j } : highest;
          lowest = (lowest.value > tmpValue) ? { value: tmpValue, row: i, col: j } : lowest;
        }
      }
    }
    bestChoice = (highest.value + lowest.value > 0)
      ? { row: highest.row, col: highest.col }
      : { row: lowest.row, col: lowest.col }
    go(bestChoice.row, bestChoice.col)
  }

  const checkWin = (row, col) => {
    let count = 1;
    let blocked = 0;
    let start = { row: row, col: col };
    let end = { row: row, col: col };
    let scaleStart = true;
    let scaleEnd = true;
    //check diagontal 1
    for (let i = 1; i < 5; i++) {
      if ((row - i) >= 0 && (col - i) >= 0) {
        if (scaleStart && board[row][col] === board[row - i][col - i]) {
          count++;
          start = { row: row - i, col: col - i };
          if (count === 5) { break; };
        } else {
          scaleStart = false;
        };
      }
      if ((row + i) < NUMBER_OF_ROWS && (col + i) <= NUMBER_OF_COLUMNS) {
        if (scaleEnd && board[row][col] === board[row + i][col + i]) {
          count++;
          end = { row: row + i, col: col + i };
          if (count === 5) { break; }
        } else {
          scaleEnd = false;
        };
      }
    }
    if (start.row >= 1 && start.col >= 1
      && end.row <= NUMBER_OF_ROWS - 2 && end.col <= NUMBER_OF_COLUMNS - 2) {
      if (board[row][col] === 1) {
        blocked = (board[start.row - 1][start.col - 1] === 0) ? blocked + 1 : blocked;
        blocked = (board[end.row + 1][end.col + 1] === 0) ? blocked + 1 : blocked;
      }
      if (board[row][col] === 0) {
        blocked = (board[start.row - 1][start.col - 1] === 1) ? blocked + 1 : blocked;
        blocked = (board[end.row + 1][end.col + 1] === 1) ? blocked + 1 : blocked;
      }
    }
    if (count === 5 && !(law === 2 && blocked === 2)) {
      setWin(board[row][col])
      return board[row][col];
    }

    count = 1;
    blocked = 0;
    start = { row: row, col: col };
    end = { row: row, col: col };
    scaleStart = true;
    scaleEnd = true;
    // check diagontal 2
    for (let i = 1; i < 5; i++) {
      if ((row - i) >= 0 && (col + i) >= 0) {
        if (scaleStart && board[row][col] === board[row - i][col + i]) {
          count++;
          start = { row: row - i, col: col + i };
          if (count === 5) { break; }
        } else {
          scaleStart = false;
        }
      }
      if ((row + i) < NUMBER_OF_ROWS && (col - i) <= NUMBER_OF_COLUMNS) {
        if (scaleEnd && board[row][col] === board[row + i][col - i]) {
          count++;
          end = { row: row + i, col: col - i };
          if (count === 5) { break; }
        } else {
          scaleEnd = false;
        }
      }
    }
    if (start.row >= 1 && start.col <= NUMBER_OF_COLUMNS - 2
      && end.row <= NUMBER_OF_ROWS - 2 && end.col >= 1) {
      if (board[row][col] === 1) {
        blocked = (board[start.row - 1][start.col + 1] === 0) ? blocked + 1 : blocked;
        blocked = (board[end.row + 1][end.col - 1] === 0) ? blocked + 1 : blocked;
      }
      if (board[row][col] === 0) {
        blocked = (board[start.row - 1][start.col + 1] === 1) ? blocked + 1 : blocked;
        blocked = (board[end.row + 1][end.col - 1] === 1) ? blocked + 1 : blocked;
      }
    }
    if (count === 5 && !(law === 2 && blocked === 2)) {
      setWin(board[row][col])
      return board[row][col];
    }

    count = 1;
    blocked = 0;
    start = { row: row, col: col };
    end = { row: row, col: col };
    scaleStart = true;
    scaleEnd = true;
    //check vertical
    for (let i = 1; i < 5; i++) {
      if ((row - i) >= 0) {
        if (scaleStart && board[row][col] === board[row - i][col]) {
          count++;
          start = { row: row - i, col: col };
          if (count === 5) { break; }
        } else {
          scaleStart = false;
        }
      }
      if ((row + i) < NUMBER_OF_ROWS) {
        if (scaleEnd && board[row][col] === board[row + i][col]) {
          count++;
          end = { row: row + i, col: col };
          if (count === 5) { break; }
        } else {
          scaleEnd = false;
        }
      }
    }
    if (start.row >= 1 && end.row <= NUMBER_OF_ROWS - 2) {
      if (board[row][col] === 1) {
        blocked = (board[start.row - 1][start.col] === 0) ? blocked + 1 : blocked;
        blocked = (board[end.row + 1][end.col] === 0) ? blocked + 1 : blocked;
      }
      if (board[row][col] === 0) {
        blocked = (board[start.row - 1][start.col] === 1) ? blocked + 1 : blocked;
        blocked = (board[end.row + 1][end.col] === 1) ? blocked + 1 : blocked;
      }
    }
    if (count === 5 && !(law === 2 && blocked === 2)) {
      setWin(board[row][col])
      return board[row][col];
    }

    count = 1;
    blocked = 0;
    start = { row: row, col: col };
    end = { row: row, col: col };
    scaleStart = true;
    scaleEnd = true;
    //check horizontal
    for (let i = 1; i < 5; i++) {
      if ((col - i) >= 0) {
        if (scaleStart && board[row][col] === board[row][col - i]) {
          count++;
          start = { row: row, col: col - i };
          if (count === 5) { break; }
        } else {
          scaleStart = false;
        }
      }
      if ((col + i) <= NUMBER_OF_COLUMNS) {
        if (scaleEnd && board[row][col] === board[row][col + i]) {
          count++;
          end = { row: row, col: col + i };
          if (count === 5) { break; }
        } else {
          scaleEnd = false;
        }
      }
    }
    if (start.col >= 1 && end.col <= NUMBER_OF_COLUMNS - 2) {
      if (board[row][col] === 1) {
        blocked = (board[start.row][start.col - 1] === 0) ? blocked + 1 : blocked;
        blocked = (board[end.row][end.col + 1] === 0) ? blocked + 1 : blocked;
      }
      if (board[row][col] === 0) {
        blocked = (board[start.row][start.col - 1] === 1) ? blocked + 1 : blocked;
        blocked = (board[end.row][end.col + 1] === 1) ? blocked + 1 : blocked;
      }
    }
    if (count === 5 && !(law === 2 && blocked === 2)) {
      setWin(board[row][col])
      return board[row][col];
    }

    return -1; //-1: continue game, 0: o win, 1: x win
  }

  return {
    type,
    law,
    // whoStart,
    turn,
    win,
    board,
    historyBoard,
    indexTurn,
    newGame,
    go,
    computerGo,
    backHistory,
    forwardHistory
  }
}

export default useGame;