import { SET_POSITION, CAPTURE_PIECE } from 'store/actions'
import { INIT_STATE } from 'data/constants'

const initialState = {
  currentPieces: INIT_STATE,
  capturedPieces: []
}

const pieces = (state = initialState, action) => {
  // console.log('*** pieces::action', action)

  switch (action.type) {
    case SET_POSITION:
      return {
        ...state,
        currentPieces: [
          ...state.currentPieces.map(piece =>
            piece.id === action.obj.piece.id
              ? { ...piece, position: action.obj.position }
              : piece
          )
        ]
      }

    case CAPTURE_PIECE:
      return {
        ...state,
        currentPieces: state.currentPieces.filter(
          piece => piece.id !== action.obj.piece.id
        ),
        capturedPieces: [...state.capturedPieces, action.obj]
      }

    default:
      return state
  }
}

export default pieces
