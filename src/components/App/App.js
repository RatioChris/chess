import React from 'react'
import { useSelector } from 'react-redux'
import { BLACK, WHITE } from 'data/constants'
import './App.scss'
import Board from 'components/Board'
import Tray from 'components/Tray'

function App() {
  const currentPlayer = useSelector(state => state.app.currentPlayer)
  const currentPieces = useSelector(state => state.pieces.currentPieces)
  const capturedPieces = useSelector(state => state.pieces.capturedPieces)
  const capturedBlackPieces = capturedPieces.filter(
    piece => piece.color === BLACK
  )
  const capturedWhitePieces = capturedPieces.filter(
    piece => piece.color === WHITE
  )

  return (
    <main className="app">
      <header>
        Player: <span className={currentPlayer}>{currentPlayer}</span>
      </header>

      <Tray pieces={capturedBlackPieces} color={BLACK} />

      <Board pieces={currentPieces} />

      <Tray pieces={capturedWhitePieces} color={WHITE} />
    </main>
  )
}

export default App
