import api from "./api";
import { userConstants } from "../constants/user.constants";

const { SIGNUP, LOGIN } = userConstants;

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