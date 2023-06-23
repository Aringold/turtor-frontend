import { Axios } from "../root";
import { history } from "../../../history";
import { LOGIN_WITH_JWT, SIGNUP_WITH_JWT, LOGOUT_WITH_JWT } from "../../actions/types";
import Config from "../../../config/config";
import { displayServerErrorMessage, displaySuccessMessage } from "../../../service/Alert";

export const loginWithJWT = user => {
  return dispatch => {
    Axios
      .post("/signin", {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data) {
          let loggedInUser = response.data;
          localStorage.setItem(Config.token, loggedInUser.token);

          dispatch({
            type: LOGIN_WITH_JWT,
            payload: { loggedInUser, loggedInWith: "jwt" },
            isLoggedIn: true
          })  
          history.push("/");
          displaySuccessMessage("Login Successfully");
        }
      })
      .catch((err) => {
        displayServerErrorMessage(err);
      })
  }
}

export const signupWithEmail = (values, type) => {
  return dispatch => {
    Axios
      .post("/register/" + type, values)
      .then(response => {
        if(response.data){
          let loggedInUser = response.data;
          localStorage.setItem(Config.token, loggedInUser.token)
          dispatch({
            type: LOGIN_WITH_JWT,
            payload: { loggedInUser, loggedInWith: "jwt" },
            isLoggedIn: true
          })

          toast.success('Register Successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // history.push("/");
        }
      })
      .catch((err) => {
        toast.error(err.response && err.response.data.error.toString(), {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }
}

export const loginWithToken = () => {
  // let token = localStorage.getItem(Config.token);
  return dispatch => {
    Axios
      .post('/signin-with-token')
      .then((res) => {
        if (res.data) {
          let loggedInUser = res.data;
          localStorage.setItem(Config.token, loggedInUser.token);
          dispatch({
            type: LOGIN_WITH_JWT,
            payload: { loggedInUser, loggedInWith: "jwt" },
            isLoggedIn: true
          })
        }
      })
      .catch(console.error)
  }
}

export const logoutWithJWT = () => {
  return dispatch => {
    localStorage.removeItem(Config.token);
    dispatch({ type: LOGOUT_WITH_JWT, payload: {} })
    history.push("/")
  }
}