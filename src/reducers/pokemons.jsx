// se crea nuestro estado inicial 

import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState ={
  pokemons: [],
  loading: false,
}

export const pokemonsReducers = (state = initialState, action) =>{
  switch (action.type) {
    case SET_POKEMONS:
      
      return {...state, pokemons: action.payload}
    
    case SET_LOADING:
      return{...state, loading: action.payload};

    case SET_FAVORITE:
      const newPokemonsList = [ ...state.pokemons];
      const currentPokemonsIndex = newPokemonsList.findIndex(
        (pokemon) =>{
          return pokemon.id === action.payload.pokemonId;
        }
      )
      if (currentPokemonsIndex < 0) {
        return state;
      }
      newPokemonsList[currentPokemonsIndex].favorite =
      !newPokemonsList[currentPokemonsIndex].favorite;

      return { ...state, pokemons: newPokemonsList }
    default:
      return state;
  }
} 