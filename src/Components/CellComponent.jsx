import React from "react";
import cn from 'classnames'
function CellComponent ({ cell}) {
     const {color} = cell
     let dark = (color == 'gray')
    //  console.log(cell)
        return (
          <div
            className={cn('cell',{'bg-gray-600': dark})}
          >
            {cell.available && !cell.figure && <div className={"available"} />}
      
            {cell.figure && <div className="cell-figure" data-piece={cell.figure}>{cell.figure}</div>}
          </div>
        );
}

export default CellComponent