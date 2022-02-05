import {configureStore} from "@reduxjs/toolkit"

//* importamos todos nuestros reducers 
import loginReducer from "./reducers/login"
import superHeroesReducer from "./reducers/superHero"

export default configureStore({
  reducer: {
    loginReducer,
    superHeroesReducer
  },
})