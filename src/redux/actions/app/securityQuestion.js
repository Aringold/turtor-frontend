import { history } from "../../../history";
import { FETCH_SECURITY_QUESTIONS } from "../types";
import {Axios} from "../root"

export const getSecurityQuestions = () => {
  return dispatch => {
    Axios
      .get("/security-questions")
      .then(response => {

        if (response.data) {
          var securityQuestions = response.data.securityQuestions;
          dispatch({
            type: FETCH_SECURITY_QUESTIONS,
            payload: securityQuestions
          })
        }
      })
      .catch(err => console.log(err))
  }
}