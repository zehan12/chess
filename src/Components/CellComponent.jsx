import React from "react";
import cn from 'classnames'
function CellComponent ({color, cell={}, dark}) {
        return (
          <div
            className={cn('cell',{'bg-gray-600': dark})}
          >
            {cell.available && !cell.figure && <div className={"available"} />}
      
            {cell.figure && <div className="cell-figure" data-piece={cell.figure}></div>}
          </div>
        );
}

export default CellComponent