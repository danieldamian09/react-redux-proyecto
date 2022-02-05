// creamos como accesos directos a estas piezas de informacion para utilizarlas en nuestros selectores
export const isAuthSel = state => state.loginReducer.isAuth;
export const isChekingAuthSel = state => state.loginReducer.isCheckingAuth;

export const isSendingAuthFormSel = state => state.loginReducer.isSendingAuthForm
export const isSuccessLoggedSel = state =>  state.loginReducer.isSuccessLogged

// Creo los accesos directos a las 3 banderas para utilizarlo dentro de mi componente (viene de los reducers)

export const isFectchingSuperheroSel = state => state.superHeroesReducer.isFectchingSuperhero
export const superHeroesErrorSel = state => state.superHeroesReducer.error
export const superheroesSel = state => state.superHeroesReducer.superheroes
