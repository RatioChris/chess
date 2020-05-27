import React from 'react'
import { useSelector } from 'react-redux'
import './App.scss'
import Board from 'components/Board'
import Tray from 'components/Tray'

function App() {
  const currentPlayer = useSelector(state => state.app.currentPlayer)
  const currentPieces = useSelector(state => state.pieces.currentPieces)
  const capturedPieces = useSelector(state => state.pieces.capturedPieces)
  const capturedBlackPieces = capturedPieces.filter(
    piece => piece.color === 'black'
  )
  const capturedWhitePieces = capturedPieces.filter(
    piece => piece.color === 'white'
  )

  return (
    <main className="app">
      <header>
        Player: <span className={currentPlayer}>{currentPlayer}</span>
      </header>

      <Tray pieces={capturedBlackPieces} color={'black'} />

      <Board pieces={currentPieces} />

      <Tray pieces={capturedWhitePieces} color={'white'} />
    </main>
  )
}

export default App
