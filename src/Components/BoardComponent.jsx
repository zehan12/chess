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
    console.log('click',cell)
    if (cell.piece?.color && cell.piece?.color === currentPlayer) {
      console.log('inside if')
      setSelectedCell(cell);
    } else {
      setSelectedCell(null)
    }
  console.log(selectedCell,"xxxx")


    
  }
  console.log(selectedCell,"xxxx")
  return(

        <div className="board">
        {board.cells.map((row, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-evenly", width: "800px" }}>
            {row.map((cell, j) => {
                return(
                    <CellComponent
                    highlightCells={selectedCell}
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