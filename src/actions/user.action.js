import api from "./api";
import Constants  from "../constants/constants";

const { SIGNUP, LOGIN } = Constants;

export const signupUser = data => ({
  type: SIGNUP,
  payload: api({
    method: 'POST',
    url: '/auth/signup',
    data: data
  })
});

export const loginUser = data => ({
  type: LOGIN,
  payload: api({
    method: 'POST',
    url: '/auth/login',
    data: data
  })
});

