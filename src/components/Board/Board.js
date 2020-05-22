import React from 'react'
import { useSelector } from 'react-redux'
import { FILES, RANKS, BOARD } from 'data/constants'
import './Board.scss'
import Square from 'components/Square'
import Piece from 'components/Piece'

const Board = props => {
  const pieces = useSelector(state => state.pieces)

  return (
    <section className="board">
      <div className="grid">
        {BOARD.map(value => (
          <Square key={value.id} id={value.id} />
        ))}
      </div>

      <div className="pieces">
        {pieces.map(value => (
          <Piece
            key={value.id}
            color={value.color}
            name={value.name}
            position={value.position}
          />
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
