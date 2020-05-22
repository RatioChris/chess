import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { FILES, RANKS } from 'data/constants'
import './Piece.scss'

const SQUARE_WIDTH = `${100 / 8}%`

const Piece = ({ color, name, position }) => {
  const activeSquare = useSelector(state => state.app.activeSquare)
  const cx = classNames({
    piece: true,
    [color]: true,
    [name]: true,
    active: position === activeSquare
  })
  const coords = position?.split('')
  const x = FILES.indexOf(coords[0])
  const y = RANKS.indexOf(coords[1])
  const style = {
    left: `calc(${SQUARE_WIDTH} * ${x})`,
    top: `calc(${SQUARE_WIDTH} * ${y})`
  }

  return <div className={cx} style={style} />
}

export default Piece
