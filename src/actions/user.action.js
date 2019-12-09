import api from "./api";
import { userConstants } from "../constants/user.constants";

// export const userActions ={
//   signupUser,
//   loginUser,
//   logout
// }
const {SIGNUP, LOGIN} = userConstants
export const  signupUser = data=>({
      type: SIGNUP,
      payload: api({
        method: "POST",
        data: data,
        url: '/users'
      }
      )
  });

export const  loginUser= data=>({
      type: LOGIN,
      payload: api({
        method: "POST",
        data: data ,
        url: '/auth/login'
      }
      )
  });


// function logout() {
//   localStorage.removeItem('token');
//   return { type: userConstants.LOGOUT };
// }

