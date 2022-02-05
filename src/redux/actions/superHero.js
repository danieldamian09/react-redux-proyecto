import {createAction} from "@reduxjs/toolkit";

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
    const { data } = await axios.get(`https://superheroapi.com/api.php/10223232565340348/search/${text}`);
    dispatch(successFetchingSuperheroes({data}))

  } catch (error) {
    //* pasamos como payload el error

    dispatch(errorFetchingSuperheroes({error}))
  }
} 