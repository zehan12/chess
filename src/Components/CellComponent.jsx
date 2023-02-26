import React from "react";
import cn from 'classnames'
function CellComponent ({ cell, handleCellClick, isSelected}) {
     const {color, available, piece,x,y} = cell
     let dark = (color == 'black')
    //  console.log(cell)
        return (
          <div
            onClick={handleCellClick}
            className={cn('cell relative',{'bg-gray-600': dark, 'bg-yellow-200':isSelected})}
          >
            {available && <div className={"available inset-center bg-green-400"} ></div>}
            {piece && <div className="cell-piece" data-piece={piece.color+'-'+piece.name}></div>}
          </div>
        );
}

export default CellComponent