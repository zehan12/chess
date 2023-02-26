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
    this.available = false;
    }

    setPiece(piece) {
      this.piece = piece
    }

    isEmpty() {
      return this.piece === null;
    }

    isEnemy(piece) {
      if (this.piece) {
        return this.piece?.color !== piece.color;
      }
      return false;
    }

    isEmptyHorizontallyFrom(targetCell) {
      if (this.x !== targetCell.x) {
        return false;
      }
      const min = Math.min(this.y, targetCell.y);
      const max = Math.max(this.y, targetCell.y);
      for (let y = min + 1; y < max; y++) {
        if (!this.board.getCell(this.x, y).isEmpty()) {
          return false;
        }
      }
      return true;
    }

    isEmptyVerticallyFrom(targetCell) {

      if (this.y !== targetCell.y) {
        return false;
      }
      const min = Math.min(this.x, targetCell.x);
      const max = Math.max(this.x, targetCell.x);
      for (let x = min + 1; x < max; x++) {
         
        if (!this.board.getCell(x, this.y).isEmpty()) {
          return false;
        }
      }
      return true;
    }

    isEmptyDiagonallyFrom(targetCell) {
      const absX = Math.abs(targetCell.x - this.x);
      const absY = Math.abs(targetCell.y - this.y);
      if (absY !== absX) {
        return false;
      }
      const dy = this.y < targetCell.y ? 1 : -1;
      const dx = this.x < targetCell.x ? 1 : -1;
  
      for (let i = 1; i < absY; i++) {
        if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
          return false;
        }
      }
      return true;
    }
}



export default Cell
