import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveSquare,
  setPosition,
  capturePiece,
  togglePlayer
} from 'store/actions'
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

    if (_canSelect()) {
      dispatch(setActiveSquare(id))
    } else if (_canMove()) {
      dispatch(setActiveSquare(id))

      // move piece
      dispatch(
        setPosition({
          piece: activePiece,
          position: id
        })
      )

      // capture piece
      if (currentPiece) {
        dispatch(
          capturePiece({
            piece: currentPiece
          })
        )
      }

      dispatch(togglePlayer())
    }
  }
  const _canSelect = () => {
    const correctPlayer = currentPiece?.color === currentPlayer
    return currentPiece && correctPlayer
  }
  const _canMove = () => {
    const sameColor = activePiece?.color === currentPiece?.color
    const samePosition = activePiece?.position === currentPiece?.position
    return activePiece && !sameColor && !samePosition
  }

  return <div className={cx} onClick={() => _clickHandler(id)} />
}

export default Square
