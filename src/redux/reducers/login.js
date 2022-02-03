import {createReducer} from "@reduxjs/toolkit";
import {checkingAuth, completedAuth, errorAuth} from "../actions/login";

//! en el action viene el type y el payload
//! creo esta bandera isChekingAuth 
//! Declaromos el estado inicial
const initialState= {
  isCheckingAuth: false,
  isAuth: false,
  error: undefined,
}

const loginReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(checkingAuth.toString(), (state, action) => {
      // aca creo la bandera isChekingAuth
			return {
        ...state,
        isCheckingAuth: true,
      }
		})
		.addCase(completedAuth.toString(), (state, action) => {
			return {
        ...state, 
        isAuth: action.payload.isAuth,
        isCheckingAuth: false,
      }
		})
		.addCase(errorAuth.toString(), (state, action) => {
			return {
        ...state,
        isAuth: false,
        isCheckingAuth: false,
        error: action.payload.error

      }
		});
});

export default loginReducer;
