import React from 'react'
import './Piece.scss'
import { FILES, RANKS } from 'data/constants'

const SQUARE_WIDTH = `${100 / 8}%`

const Piece = props => {
  const classes = `piece ${props.color} ${props.name}`
  const coords = props.coord.split('')
  const x = FILES.indexOf(coords[0])
  const y = RANKS.indexOf(coords[1])
  const style = {
    left: `calc(${SQUARE_WIDTH} * ${x})`,
    top: `calc(${SQUARE_WIDTH} * ${y})`
  }

  return <div className={classes} style={style} />
}

export default Piece
