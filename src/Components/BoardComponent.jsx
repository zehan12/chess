import React, { useEffect, useState } from "react";
import CellComponent from "./CellComponent";



function BoardComponent({board, currentPlayer, setBoard}) {
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
    if (cell.piece?.color && cell.piece?.color === currentPlayer) {
      setSelectedCell(cell);
    } else {
      setSelectedCell(null)
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