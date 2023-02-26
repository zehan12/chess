import Cell from "./Cell";
import Piece from "./Pieces";

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8].reverse();

const PIECE_NAME = {
    king: 'king',
    queen: 'queen',
    rook: 'rook',
    knight: 'knight',
    bishop: 'bishop',
    pawn: 'pawn',
}

// const COLOR = {
//     black: 'gray',
//     white: 'white'
// }

var INIT_WHITE = {
    'A1': 'rook', 'B1': 'knight', 'C1': 'bishop', D1: 'queen', 'E1': 'king', 'F1': 'bishop', 'G1': 'knight', 'H1': 'rook',
    'A2': 'pawn', 'B2': 'pawn', 'C2': 'pawn', 'D2': 'pawn', 'E2': 'pawn', 'F2': 'pawn', 'G2': 'pawn', 'H2': 'pawn',
  }

  var INIT_BLACK = {
    'A8': 'rook', 'B8': 'knight', 'C8': 'bishop', D8: 'queen', 'E8': 'king', 'F8': 'bishop', 'G8': 'knight', 'H8': 'rook',
    'A7': 'pawn', 'B7': 'pawn', 'C7': 'pawn', 'D7': 'pawn', 'E7': 'pawn', 'F7': 'pawn', 'G7': 'pawn', 'H7': 'pawn',
  }

  function assignPiece(id) {

    if (INIT_WHITE[id]) {
      return "white-" + INIT_WHITE[id]
    } else if (INIT_BLACK[id]) {
      return "black-" + INIT_BLACK[id]
    } else {
      return id;
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
                row.push(new Cell(this, i, j, color, null, id)); //Black cells
        })
        this.cells.push(row);
    })
    }

    getCell(x,y){
      return this.cells[y][x]
    }

     addPawns() {
        for (let i = 0; i < 8; i++) {
          new Piece(COLOR.black, this.getCell(i, 1), PIECE_NAME.pawn);
          new Piece(COLOR.white, this.getCell(i, 6), PIECE_NAME.pawn);
        }
      }
       addKings() {
        new Piece(COLOR.black, this.getCell(4, 0), PIECE_NAME.king);
        new Piece(COLOR.white, this.getCell(4, 7), PIECE_NAME.king);
      }
       addQueens() {
        new Piece(COLOR.black, this.getCell(3, 0), PIECE_NAME.queen);
        new Piece(COLOR.white, this.getCell(3, 7), PIECE_NAME.queen);
      }
       addKnights() {
        new Piece(COLOR.black, this.getCell(1, 0), PIECE_NAME.knight);
        new Piece(COLOR.white, this.getCell(1, 7), PIECE_NAME.knight);
        new Piece(COLOR.black, this.getCell(6, 0), PIECE_NAME.knight);
        new Piece(COLOR.white, this.getCell(6, 7), PIECE_NAME.knight);
      }
       addBishops() {
        new Piece(COLOR.black, this.getCell(2, 0), PIECE_NAME.bishop);
        new Piece(COLOR.white, this.getCell(2, 7), PIECE_NAME.bishop);
        new Piece(COLOR.black, this.getCell(5, 0), PIECE_NAME.bishop);
        new Piece(COLOR.white, this.getCell(5, 7), PIECE_NAME.bishop);
      }
       addRooks() {
        new Piece(COLOR.black, this.getCell(0, 0), PIECE_NAME.rook);
        new Piece(COLOR.white, this.getCell(0, 7), PIECE_NAME.rook);
        new Piece(COLOR.black, this.getCell(7, 0), PIECE_NAME.rook);
        new Piece(COLOR.white, this.getCell(7, 7), PIECE_NAME.rook);
      }

    addPieces() {
            this.addBishops();
            this.addKings();
            this.addPawns();
            this.addQueens();
            this.addRooks();
            this.addKnights();
          }
    }

  export default Board
