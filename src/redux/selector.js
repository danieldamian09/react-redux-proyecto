// creamos como accesos directos a estas piezas de informacion para utilizarlas en nuestros selectores
export const isAuthSel = state => state.loginReducer.isAuth;
export const isChekingAuthSel = state => state.loginReducer.isCheckingAuth;

export const isSendingAuthFormSel = state => state.loginReducer.isSendingAuthForm
export const isSuccessLoggedSel = state =>  state.loginReducer.isSuccessLogged