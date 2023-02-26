
export class Piece {
  
  constructor(color, cell, name) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.name = name;
    this.id = Math.random();
  }
}


export default Piece