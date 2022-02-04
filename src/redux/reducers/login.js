import {createReducer} from "@reduxjs/toolkit";
import {
	checkingAuth,
	completedAuth,
	errorAuth,
	sendingAuthForm,
	completedSendAuthForm,
	errorSendAuthForm,
} from "../actions/login";

//! en el action viene el type y el payload
//! creo esta bandera isChekingAuth
//! Declaromos el estado inicial
//! Agrego las banderas para mis 3 acciones de authForm (isSendingAuthForma, isSuccessLogged, error: ya esta)
const initialState = {
	isCheckingAuth: false,
  isSendingAuthForm: false,
  isSuccessLogged: false,
	isAuth: false,
	error: undefined,
};

const loginReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(checkingAuth.toString(), (state, action) => {
			//! aca creo la bandera isChekingAuth
			return {
				...state,
				isCheckingAuth: true,
			};
		})
		.addCase(completedAuth.toString(), (state, action) => {
			//! aca isAuth va a ser true ya que de la acction me viene una comprabacion del localstorage "ojo si hay el token en localstorage"
			return {
				...state,
				isAuth: action.payload.isAuth,
				isCheckingAuth: false,
			};
		})
		.addCase(errorAuth.toString(), (state, action) => {
			return {
				...state,
				isAuth: false,
				isCheckingAuth: false,
				error: action.payload.error,
			};
		})
    // agramos los casos para el authLogin (3)
    .addCase(sendingAuthForm.toString(), (state, action) => {
      return {
        ...state,
        isSendingAuthForm: true,
        error: undefined,
      }
    })
    .addCase(completedSendAuthForm.toString(), (state, action) => {
      return {
        ...state,
        isSendingAuthForm: false,
        isSuccessLogged: true,
      }
    })
    .addCase(errorSendAuthForm.toString(), (state, action) => {
      return {
        ...state,
        isSendingAuthForm: false,
        isSuccessLogged: false,
        error: action.payload.error
      }
    })
});

export default loginReducer;
