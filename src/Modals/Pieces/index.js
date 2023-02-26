
export class Piece {
  
  constructor(color, cell, name) {
    this.color = color;
    this.cell = cell;
    this.cell.piece = this;
    this.name = name;
    this.id = Math.random();
    this.cell.setPiece(this)
  }
}


export default Piece