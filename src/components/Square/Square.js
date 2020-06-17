import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveSquare,
  setPosition,
  capturePiece,
  togglePlayer
} from 'store/actions'
import { canSelect, canMove } from 'data/utils'
import classNames from 'classnames'
import './Square.scss'

const Square = ({ id }) => {
  const dispatch = useDispatch()
  const activeSquare = useSelector(state => state.app.activeSquare)
  const currentPlayer = useSelector(state => state.app.currentPlayer)
  const currentPiece = useSelector(state => state.pieces.currentPieces).find(
    obj => obj.position === id
  )
  const activePiece = useSelector(state => state.pieces.currentPieces).find(
    obj => obj.position === activeSquare
  )
  const cx = classNames({
    square: true,
    active: id === activeSquare
  })

  const _clickHandler = id => {
    if (!currentPiece && !activePiece) return
    console.log('*** currentPiece, activePiece', currentPiece, activePiece)

    if (canSelect(currentPiece, currentPlayer)) {
      _setActiveSquare(id)
    } else if (canMove(activePiece, id, currentPiece, currentPlayer)) {
      _setActiveSquare(id)
      _movePiece(id)
      if (currentPiece) _capturePiece()
      _togglePlayer()
    }
  }

  const _setActiveSquare = id => {
    dispatch(setActiveSquare(id))
  }

  const _movePiece = id => {
    dispatch(
      setPosition({
        piece: activePiece,
        position: id
      })
    )
  }

  const _capturePiece = () => {
    dispatch(
      capturePiece({
        piece: currentPiece
      })
    )
  }

  const _togglePlayer = () => {
    dispatch(togglePlayer())
  }

  return <div className={cx} onClick={() => _clickHandler(id)} />
}

export default Square
