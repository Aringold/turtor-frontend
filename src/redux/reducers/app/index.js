import { combineReducers } from "redux"
import { users } from "./user"
import { Levels } from "./level"
import securityQuestion from "./securityQuestion"

const appReducers = combineReducers({
  user: users,
  level: Levels,
  securityQuestion: securityQuestion
})

export default appReducers
