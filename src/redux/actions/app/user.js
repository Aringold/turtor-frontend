import { history } from "../../../history";
import { FETCH_TEACHERS } from "../types";
import {Axios} from "../root"

export const getTutors = user => {
  return dispatch => {
    Axios
      .get("/tutors")
      .then(response => {
        if (response.data) {
          var tutors = response.data.tutors;
          dispatch({
            type: FETCH_TEACHERS,
            payload: tutors
          })
        }
      })
      .catch(err => console.log(err))
  }
}