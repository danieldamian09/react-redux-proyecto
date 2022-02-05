import {createAction} from "@reduxjs/toolkit";
//* importamos nuestro servicio para hacer las llmadas
import apiCall from "../api"

//* creamos las 3 acciones
export const startFetchingSuperheroes = createAction(
	"START_FETCHING_SUPERHEROS"
);
export const successFetchingSuperheroes = createAction(
	"SUCCESS_FEACHING_SUPERHEROES"
);
export const errorFetchingSuperheroes = createAction(
	"ERROR_FETCHING_SUPERHEROES"
);


//* creamos el thunk
export const fetchSuperheroes = (text) => async(dispatch) => {
  try {
    //* aca va toda la logica para obtener los valores

    dispatch(startFetchingSuperheroes())
    const { data } = await apiCall.get(`/search/${text}`);
    console.log(data)
    dispatch(successFetchingSuperheroes({data: data?.results}))

  } catch (error) {
    //* pasamos como payload el error

    dispatch(errorFetchingSuperheroes({error}))
  }
} 