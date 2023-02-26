
import { Fragment, useEffect, useState } from 'react';
import BoardComponent from './Components/BoardComponent';
import "./index.css"
import Board from './Modals/Board';

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  },[])


  
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    // newBoard.addFigures();
    setBoard(newBoard);
    // setCurrentPlayer(whitePlayer);
  }
  return (
    <Fragment>
      <div id="board">
      <BoardComponent board={board} />
      </div>
    </Fragment>
  )
}

export default App
