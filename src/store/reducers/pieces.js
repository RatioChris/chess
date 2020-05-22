import { SET_POSITION } from 'store/actions'
import { INIT_STATE } from 'data/constants'

const pieces = (state = INIT_STATE, action) => {
  // console.log('*** pieces::action', action)

  switch (action.type) {
    case SET_POSITION:
      return state.map(piece => {
        return piece.id === action.obj.piece.id
          ? { ...piece, position: action.obj.position }
          : piece
      })

    default:
      return state
  }
}

export default pieces
