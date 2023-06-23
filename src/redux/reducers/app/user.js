import { FETCH_TEACHERS } from '../../actions/types'

export const users = (state = { tutors: [] }, action) => {
  switch (action.type) {
    case FETCH_TEACHERS: {
      return { ...state, tutors: action.payload }
    }
    // case "CHANGE_ROLE": {
    //   return { ...state, userRole: action.userRole }
    // }
    default: {
      return state
    }
  }
}
