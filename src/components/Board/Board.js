import React from 'react'
import { FILES, RANKS, PIECES, INIT_STATE } from 'data/constants'
import './Board.scss'
import Square from 'components/Square'
import Piece from 'components/Piece'

const board = RANKS.reduce((arr, rank) => {
  FILES.forEach(file => {
    const id = `${file}${rank}`
    arr.push({ id: id })
  })
  return arr
}, [])

const pieces = INIT_STATE.reduce((arr, state) => {
  const piece = PIECES.find(obj => obj.id === state.id)
  return [...arr, { ...state, ...piece }]
}, [])

function Board() {
  return (
    <section className="board">
      <div className="grid">
        {board.map(value => (
          <Square key={value.id} id={value.id} />
        ))}
      </div>

      <div className="pieces">
        {pieces.map(value => (
          <Piece key={value.id} coord={value.coord} name={value.name} color={value.color} />
        ))}
      </div>

      <aside className="position files">
        {FILES.map(value => (
          <span key={value}>{value}</span>
        ))}
      </aside>

      <aside className="position ranks">
        {RANKS.map(value => (
          <span key={value}>{value}</span>
        ))}
      </aside>
    </section>
  )
}

export default Board
