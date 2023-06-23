import { FETCH_SECURITY_QUESTIONS } from '../../actions/types'

const SecurityQuestions = (state = { securityQuestions: [] }, action) => {
  switch (action.type) {
    case FETCH_SECURITY_QUESTIONS: {
      return { ...state, securityQuestions: action.payload }
    }
    default: {
      return state
    }
  }
}

export default SecurityQuestions