import React from "react";
import cn from 'classnames'
function CellComponent ({ cell, handleCellClick, highlightCells}) {
     const {color, available, piece} = cell
     let dark = (color == 'black')
    //  console.log(cell)
        return (
          <div
            onClick={handleCellClick}
            className={cn('cell',{'bg-gray-600': dark, 'bg-yellow-300':highlightCells?.id == cell?.id})}
          >
            {available && !piece && <div className={"available"} />}
            {piece && <div className="cell-piece" data-piece={piece.color+'-'+piece.name}></div>}
          </div>
        );
}

export default CellComponent