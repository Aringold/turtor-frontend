import { history } from "../../../history";
import { FETCH_LEVELS } from "../types";
import {Axios} from "../root"

export const getLevels = () => {
  return dispatch => {
    Axios
      .get("/levels")
      .then(response => {
        // console.log("response level", response);
        if (response.data) {
          var levels = response.data.levels;
          dispatch({
            type: FETCH_LEVELS,
            payload: levels
          })
        }
      })
      .catch(err => console.log(err))
  }
}

// /sjdfslkfjskljl