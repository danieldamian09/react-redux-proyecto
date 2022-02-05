import {createReducer} from "@reduxjs/toolkit";

//* importamos las acciones (3)
import {
	startFetchingSuperheroes,
	successFetchingSuperheroes,
	errorFetchingSuperheroes,
} from "../actions/superHero";

//* Declaramos el state inicial(estas nos van a servir como banderas en el componente)
const initialState = {
	isfectchingSuperhero: false,
	error: undefined,
	superheroes: [],
};

//* Declaramos el reducer (creamos los casos)
const superHeroesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(startFetchingSuperheroes.toString(), (state, action) => {
			return {
				...state,
				isFectchingSuperhero: true,
				error: undefined,
			};
		})
		.addCase(successFetchingSuperheroes.toString(), (state, action) => {
			return {
				...state,
				isFectchingSuperhero: false,
				superheroes: action.payload.data,
			};
		})
		.addCase(errorFetchingSuperheroes.toString(), (state, action) => {
			return {
				...state,
				isFectchingSuperhero: false,
				superheroes: [],
				error: action.payload.error,
			};
		})
		.addDefaultCase((state, action) => {
			return {
				state,
			};
		});
});

export default superHeroesReducer;
