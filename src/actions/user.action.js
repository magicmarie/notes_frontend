import axiosInstance from "../components/apicalls";
import { userConstants } from "../constants/user.constants";

export const userActions ={
  signupUser,
  loginUser,
  logout
}
function signupUser(data) {
  return (dispatch) => {
    return axiosInstance
    .post("/auth/signup", {data})
    .then(response => {
      console.log(response);
      dispatch({
        type: userConstants.SIGNUP_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: userConstants.SIGNUP_FAILURE, error
      })
    });
  };
}
  

function loginUser(data) {
  return (dispatch) => {
    return axiosInstance
      .post("/auth/login", {data})
      .then(response => {
        console.log(response);
        dispatch({
          type: userConstants.LOGIN_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: userConstants.LOGIN_FAILURE, error
        })
      });
  };
}

function logout() {
  localStorage.removeItem('token');
  return { type: userConstants.LOGOUT };
}