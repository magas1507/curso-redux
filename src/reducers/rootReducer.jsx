import { combineReducers } from "redux-immutable";
import { pokemonsReducers } from "./pokemons";
import { uiReducers } from "./ui";

const rootReducer = combineReducers({
  data: pokemonsReducers,
  ui:uiReducers,
});

export default rootReducer;