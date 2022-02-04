import {createAction} from "@reduxjs/toolkit";

export const checkingAuth = createAction("CHECKING_AUTH");
export const completedAuth = createAction("COMPLETED_AUTH");
export const errorAuth = createAction("ERROR_AUTH");


// acciones para submit del login nos permiten levantar las banderas (3) acciones
export const sendingAuthForm = createAction("SENDING_AUTH_FORM")
export const completedSendAuthForm = createAction("COMPLETED_SEND_AUTH_FORM")
export const errorSendAuthForm = createAction("ERROR_SEND_AUTH_FORM")



// esta accion como es asincrona va con un thunk
export const checkIfUserIsAuth = () => (dispatch) => {
	try {
		dispatch(checkingAuth());
		// aca comprueba si hay token en localStorage
		const isAuth = localStorage.getItem("@superhero-isAuth")?.length > 0;
		dispatch(completedAuth({isAuth}));
	} catch (error) {
		dispatch(errorAuth({error}));
	}
};

// -----------------------------------------------------------------------

// creamos otra accion para el submit del login con thunk
export const submitLogin = (name, email) => (dispatch) => {
	// aca disparamos todas las acciones(3)
	try {
		dispatch(sendingAuthForm())
		localStorage.setItem("@superhero-isAuth", "true");
		localStorage.setItem(
			"@superhero-data",
			JSON.stringify({
				name,
				email,
			})
		);
		dispatch(completedSendAuthForm())
	} catch (error) {
		// le mandamos el error como objeto o payload
		dispatch(errorSendAuthForm({error}))
	}
};
