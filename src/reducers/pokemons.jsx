// se crea nuestro estado inicial 

import { SET_POKEMONS } from "../actions/types";

const initialState ={
  pokemons: [],
}

export const pokemonsReducers = (state = initialState, action) =>{
  switch (action.type) {
    case SET_POKEMONS:
      
      return {...state, pokemons: action.payload}
  
    default:
      return state;
  }
} 