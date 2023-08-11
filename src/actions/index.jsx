import { SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api";

export const setPokemons = (payload) => {
  return ({
    type: SET_POKEMONS,
    payload,
  });
};
//Esto solo se puede hacer por redux thunk
export const getPokemonWithDetails =
  (pokemons = []) =>
  async(dispatch) =>{
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
  }