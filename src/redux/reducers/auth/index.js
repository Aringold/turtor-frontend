import { LOGIN_WITH_JWT, LOGOUT_WITH_JWT } from '../../actions/types'

const initialState = {
  userinfo: null,
  isLoggedIn : false,
  userRole:'',
}

const auth = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_WITH_JWT: {
      console.log("action.payload.loggedInUser", action.payload);
      return { ...state, userinfo: action.payload.loggedInUser, isLoggedIn: action.isLoggedIn, userRole: action.payload.loggedInUser.role.name  }
    }
    case LOGOUT_WITH_JWT: 
      return { ...state, userinfo: null, isLoggedIn: false, userRole: ""  }
    default: {
      return state
    }
  }
}

export default auth