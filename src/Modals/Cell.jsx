import { Board } from "./Board";

export class Cell {
  constructor(
    board,
    x,
    y,
    color,
    piece,
    id
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = color;
    this.piece = piece;
    this.board = board;
    this.available = false;  }

    setPiece(piece) {
      this.piece = piece
    }
}



export default Cell
