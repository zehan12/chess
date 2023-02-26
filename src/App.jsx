
import { Fragment, useEffect, useState } from 'react';
import BoardComponent from './Components/BoardComponent';
import "./index.css"
import Board from './Modals/Board';

var COLOR = {
  black: 'black',
  white: 'white'
}

function App() {
  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPlayer] = useState(COLOR.white)
    useEffect(() => {
    restart();
  },[])

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === COLOR.white ? COLOR.black : COLOR.white
    );
  }



  
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
    setCurrentPlayer(COLOR.white);
  }
  return (
    <Fragment>
      <div id="board">
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer}  />
      </div>
    </Fragment>
  )
}

export default App
