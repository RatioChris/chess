/*
 * action types
 */
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER'
export const SET_ACTIVE_SQUARE = 'SET_ACTIVE_SQUARE'
export const SET_POSITION = 'SET_POSITION'
export const CAPTURE_PIECE = 'CAPTURE_PIECE'

/*
 * action creators
 */
export const togglePlayer = () => {
  return {
    type: TOGGLE_PLAYER
  }
}

export const setActiveSquare = id => {
  return {
    type: SET_ACTIVE_SQUARE,
    id
  }
}

export const setPosition = obj => {
  return {
    type: SET_POSITION,
    obj
  }
}

export const capturePiece = obj => {
  return {
    type: CAPTURE_PIECE,
    obj
  }
}
