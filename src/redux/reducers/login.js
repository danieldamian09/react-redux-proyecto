import {createReducer} from "@reduxjs/toolkit";
import {checkingAuth, completedAuth, errorAuth} from "../actions/login";

// ! en el action viene el type y el payload
//! creo esta bandera isChekingAuth 

const loginReducer = createReducer([], (builder) => {
	builder
		.addCase(checkingAuth.toString(), (state, action) => {
      // aca creo la bandera isChekingAuth
			return {
        ...state,
        isChekingAuth: true,
      }
		})
		.addCase(completedAuth.toString(), (state, action) => {
			return {
        ...state, 
        isAuth: action.payload.isAuth,
        isChekingAuth: false,
      }
		})
		.addCase(errorAuth.toString(), (state, action) => {
			return {
        ...state,
        isAuth: false,
        isChekingAuth: false,
        error: action.payload.error

      }
		});
});

export default loginReducer;
