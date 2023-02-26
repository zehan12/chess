import React from "react";
import CellComponent from "./CellComponent";


var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var rows = [1, 2, 3, 4, 5, 6, 7, 8];

var INIT_WHITE = {
    'A1': 'rook', 'B1': 'knight', 'C1': 'bishop', D1: 'king', 'E1': 'queen', 'F1': 'bishop', 'G1': 'knight', 'H1': 'rook',
    'A2': 'pawn', 'B2': 'pawn', 'C2': 'pawn', 'D2': 'pawn', 'E2': 'pawn', 'F2': 'pawn', 'G2': 'pawn', 'H2': 'pawn',
  }

  var INIT_BLACK = {
    'A8': 'rook', 'B8': 'knight', 'C8': 'bishop', D8: 'queen', 'E8': 'king', 'F8': 'bishop', 'G8': 'knight', 'H8': 'rook',
    'A7': 'pawn', 'B7': 'pawn', 'C7': 'pawn', 'D7': 'pawn', 'E7': 'pawn', 'F7': 'pawn', 'G7': 'pawn', 'H7': 'pawn',
  }

  function assignPiece(row, col) {
    var id = col + row;

    if (INIT_WHITE[id]) {
      return "white-" + INIT_WHITE[id]
    } else if (INIT_BLACK[id]) {
      return "black-" + INIT_BLACK[id]
    } else {
      return id;
    }
  }

function BoardComponent() {
    return(

        <div className="board">
        {rows.map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-evenly", width: "800px" }}>
            {columns.map((cell, j) => {
                let color = (i+j) %2 ?'white': 'black'
                return(
                    <CellComponent
                    color={color}
                    cell={{figure: assignPiece(row,cell)}}
                    
                    />
                    )})}
          </div>
        ))}
      </div>
        )
}

export default BoardComponent