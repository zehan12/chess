import React from "react";
import CellComponent from "./CellComponent";



function BoardComponent({board}) {
    return(

        <div className="board">
        {board.cells.map((row, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-evenly", width: "800px" }}>
            {row.map((cell, j) => {
                return(
                    <CellComponent
                    cell={cell}
                    />
                    )})}
          </div>
        ))}
      </div>
        )
}

export default BoardComponent