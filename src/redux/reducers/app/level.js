import { FETCH_LEVELS } from '../../actions/types'

export const Levels = (state = { levels: [] }, action) => {
  switch (action.type) {
    case FETCH_LEVELS: {
      return { ...state, levels: action.payload }
    }
    default: {
      return state
    }
  }
}
