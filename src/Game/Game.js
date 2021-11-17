import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../config/const";

export default class Game {
  constructor(type, whoStart) {
    this.type = type;
    this.whoStart = whoStart;
    this.turn = 1; // 1: x, 0: o
    this.board = new Array(NUMBER_OF_ROWS).fill().map(() => new Array(NUMBER_OF_COLUMNS).fill(-1));//0: empty, 1: x, -1: y

  }

  getBoard(row, col) {
    return this.board[row][col];
  }

  getGame() {
    return this.board
  }

  go(row, col) {
    console.log("go", row, col)
    if (this.board[row][col] === 0) {
      if (this.turn === 1) {
        this.board[row][col] = 1;
        this.turn = 0;
      } else {
        this.board[row][col] = -1;
        this.turn = 1;
      }
    }
  }

  getTurn() {
    return this.turn;
  }

  checkWin() {
    return
  }

}