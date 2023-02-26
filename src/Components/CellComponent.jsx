import React from "react";
import cn from 'classnames'
function CellComponent ({ cell}) {
     const {color, available, figure,x,y} = cell
     let dark = (color == 'black')
    //  console.log(cell)
        return (
          <div
            className={cn('cell',{'bg-gray-600': dark})}
          >
            {available && !figure && <div className={"available"} />}
            {figure && <div className="cell-figure" data-piece={figure.color + '-' + figure.name}>{figure.name + String(x) + String(y)}</div>}
          </div>
        );
}

export default CellComponent