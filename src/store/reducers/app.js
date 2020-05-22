import { TOGGLE_PLAYER, SET_ACTIVE_SQUARE } from 'store/actions'

const initialState = {
  currentPlayer: 'white',
  activeSquare: undefined
}

const app = (state = initialState, action) => {
  // console.log('*** app::action', action)

  switch (action.type) {
    case TOGGLE_PLAYER: {
      const toggledPlayer = state.currentPlayer === 'white' ? 'black' : 'white'
      return { ...state, currentPlayer: toggledPlayer }
    }

    case SET_ACTIVE_SQUARE: {
      const isActiveDefined = state.activeSquare !== undefined
      const activeSquare = isActiveDefined ? undefined : action.id
      return { ...state, activeSquare: activeSquare }
    }

    default:
      return state
  }
}

export default app
