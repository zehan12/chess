import { Board } from "./Board";

export class Cell {
  constructor(
    board,
    x,
    y,
    color,
    figure,
    id
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;  }
}



export default Cell
