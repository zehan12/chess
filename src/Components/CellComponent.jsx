import React from "react";
import cn from 'classnames'
function CellComponent ({color, cell={}}) {
        return (
          <div
            className={cn(color,"cell")}
          >
            {cell.available && !cell.figure && <div className={"available"} />}
      
            {cell.figure && <div>{cell.figure}</div>}
          </div>
        );
}

export default CellComponent