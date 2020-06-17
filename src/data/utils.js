import { BOARD, BLACK, WHITE } from 'data/constants'

const convertPositionToIndex = position => {
  return BOARD.findIndex(square => square.id === position)
}

const getMoves = (player, activePiece, endPosition, currentPiece) => {
  const pieceName = activePiece?.name
  const isInitialMove = !activePiece?.hasMoved
  const src = convertPositionToIndex(activePiece?.position)
  const dest = convertPositionToIndex(endPosition)
  console.log('*** moves', pieceName, activePiece, src, dest, isInitialMove)

  switch (pieceName) {
    case 'king': {
      return (
        src - 9 === dest ||
        src - 8 === dest ||
        src - 7 === dest ||
        src + 1 === dest ||
        src + 9 === dest ||
        src + 8 === dest ||
        src + 7 === dest ||
        src - 1 === dest
      )
    }

    case 'queen': {
      const mod = src % 8
      const diff = 8 - mod
      return (
        Math.abs(src - dest) % 9 === 0 ||
        Math.abs(src - dest) % 7 === 0 ||
        Math.abs(src - dest) % 8 === 0 ||
        (dest >= src - mod && dest < src + diff)
      )
    }

    case 'bishop': {
      return Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0
    }

    case 'knight': {
      return (
        src - 17 === dest ||
        src - 10 === dest ||
        src + 6 === dest ||
        src + 15 === dest ||
        src - 15 === dest ||
        src - 6 === dest ||
        src + 10 === dest ||
        src + 17 === dest
      )
    }

    case 'rook': {
      const mod = src % 8
      const diff = 8 - mod
      return (
        Math.abs(src - dest) % 8 === 0 ||
        (dest >= src - mod && dest < src + diff)
      )
    }

    case 'pawn': {
      if (player === WHITE) {
        if (
          (dest === src - 8 && !currentPiece) ||
          (dest === src - 16 && isInitialMove)
        ) {
          return true
        } else if (currentPiece && (dest === src - 9 || dest === src - 7)) {
          return true
        }
      } else if (player === BLACK) {
        if (
          (dest === src + 8 && !currentPiece) ||
          (dest === src + 16 && isInitialMove)
        ) {
          return true
        } else if (currentPiece && (dest === src + 9 || dest === src + 7)) {
          return true
        }
      }
      return false
    }

    default:
      return
  }
}

export const canSelect = (currentPiece, currentPlayer) => {
  return currentPiece?.color === currentPlayer
}

export const canMove = (
  activePiece,
  newPosition,
  currentPiece,
  currentPlayer
) => {
  if (!activePiece) return false

  console.log(
    '*** canMove',
    activePiece,
    newPosition,
    currentPiece,
    currentPlayer
  )
  const isSameColor = activePiece?.color === currentPiece?.color
  const isSamePosition = activePiece?.position === currentPiece?.position
  const isMovePossible = getMoves(
    currentPlayer,
    activePiece,
    newPosition,
    currentPiece
  )
  console.log('*** isMovePossible', isMovePossible)

  return !isSameColor && !isSamePosition && isMovePossible
}
