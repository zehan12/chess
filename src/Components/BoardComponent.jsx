import React, { useEffect, useState } from "react";
import CellComponent from "./CellComponent";

/* TODO: 
  - Check condition
  - enpasant
  - casteling
  - pawn Promotion
  -stalemate
  - if Check cannot move piece if they dosent remove check
  - checkmate
  */

    


function BoardComponent({board, currentPlayer, setBoard, swapPlayer}) {
  const [selectedCell, setSelectedCell] = useState(null)

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell, currentPlayer?.color);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCloneBoard();
    setBoard(newBoard);
  }


  const handleCellClick = (cell) => {
    if(selectedCell) {
      if(selectedCell.id == cell.id) return setSelectedCell(null)
      if(cell.available) {
        selectedCell.movePiece(cell)
        swapPlayer();
        setSelectedCell(null)
        return
      } if(selectedCell.piece?.color == cell.piece?.color) {
        setSelectedCell(cell);
      }

    } else {
      if (cell.piece?.color && cell.piece?.color === currentPlayer) {
        setSelectedCell(cell);
      } else {
        setSelectedCell(null)
      }
    }


    
  }
  return(

        <div className="board">
        {board.cells.map((row, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-evenly", width: "800px" }}>
            {row.map((cell, j) => {
                return(
                    <CellComponent
                    isSelected={selectedCell?.id == cell.id}
                    key={cell.id}
                    handleCellClick={() => handleCellClick(cell)}
                    cell={cell}
                    />
                    )})}
          </div>
        ))}
      </div>
        )
}

export default BoardComponent