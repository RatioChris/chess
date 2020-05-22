import React from 'react'
import { useSelector } from 'react-redux'
import './App.scss'
import Board from 'components/Board'

function App() {
  const currentPlayer = useSelector(state => state.app.currentPlayer)

  return (
    <main className="app">
      <header>
        Player: <span className={currentPlayer}>{currentPlayer}</span>
      </header>

      <Board />
    </main>
  )
}

export default App
