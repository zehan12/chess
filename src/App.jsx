import { Fragment, useState } from 'react';
import BoardComponent from './Components/BoardComponent';
import "./index.css"

function App() {
  return (
    <Fragment>
      <div id="board">
      <BoardComponent />
      </div>
    </Fragment>
  )
}

export default App
