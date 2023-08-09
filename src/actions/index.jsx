import { SET_POKEMONS } from "./types"


export const setPokemons = (payload) => {
  return ({
    type: SET_POKEMONS,
    payload,
  });
};