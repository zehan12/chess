import Cell from "./Cell";
import Piece from "./Pieces";

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8].reverse();


// const COLOR = {
//     black: 'gray',
//     white: 'white'
// }

var INIT_WHITE = {
    'A1': 'rook', 'B1': 'knight', 'C1': 'bishop', D1: 'queen', 'E1': 'king', 'F1': 'bishop', 'G1': 'knight', 'H1': 'rook',
    'A2': 'pawn', 'B2': 'pawn', 'C2': 'pawn', 'D2': 'pawn', 'E2': 'pawn', 'F2': 'pawn', 'G2': 'pawn', 'H2': 'pawn', D5: 'bishop'
  }

  var INIT_BLACK = {
    'A8': 'rook', 'B8': 'knight', 'C8': 'bishop', D8: 'queen', 'E8': 'king', 'F8': 'bishop', 'G8': 'knight', 'H8': 'rook',
    'A7': 'pawn', 'B7': 'pawn', 'C7': 'pawn', 'D7': 'pawn', 'E7': 'pawn', 'F7': 'pawn', 'G7': 'pawn', 'H7': 'pawn', E4: 'pawn'
  }

  function assignPiece(id) {

    if (INIT_WHITE[id]) {
      return {color: 'white' , name: INIT_WHITE[id]}
    } else if (INIT_BLACK[id]) {
      return {color: 'black', name: INIT_BLACK[id]}
    } else {
      return null;
    }
  }

  var COLOR = {
    black: 'black',
    white: 'white'
}


export class Board {
  cells = []; //Y X


  initCells() {
    rows.forEach((numRow,i)=>{

        const row = [];
        columns.forEach((charCol,j) => {
            let color = (i+j) % 2 == 0 ? COLOR.white: COLOR.black
            let id = charCol + numRow
            let pieceDetails = assignPiece(id)
            let cell = new Cell(this, i, j, color, null, id)
            let piece = pieceDetails ? new Piece(pieceDetails.color, cell, pieceDetails.name) : null
            cell.setPiece(piece)

                row.push(cell); //Black cells
        })
        this.cells.push(row);
    })
    }

    getCell(x,y){
      return this.cells[x][y]
    }

    getCloneBoard() {
      const newBoard = new Board();
      newBoard.cells = this.cells;
      return newBoard;
    }


    highlightCells(selectedCell, color) {
      if(!selectedCell) return
      const highlited = []
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < row.length; j++) {
          let target = row[j];
          if(selectedCell.piece.canMove(target)) {
            console.log('highlited', target.id)
            target.available = true
          } else {
            target.available = false          }
        }
      }
    }
    }

  export default Board
