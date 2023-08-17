// se crea nuestro estado inicial 

import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

// const initialState ={
//   pokemons: [],
//   loading: false,
// }

//with immutable structur
const initialState = fromJS({
  pokemons: [],
  loading: false,
})

export const pokemonsReducers = (state = initialState, action) =>{
  switch (action.type) {
    case SET_POKEMONS:
      
      // return {...state, pokemons: action.payload}
      return state.setIn(['pokemons'], fromJS(action.payload));
    
    case SET_LOADING:
    //   return{...state, loading: action.payload};
    return state.setIn(['loading'], action.payload);
    case SET_FAVORITE:
      // const newPokemonsList = [ ...state.pokemons];
      // const currentPokemonsIndex = newPokemonsList.findIndex(
      //   (pokemon) =>{
      //     return pokemon.id === action.payload.pokemonId;
      //   }
      // )

      //with immutable
      const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
        return pokemon.get('id') === action.payload.pokemonId;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      //Primer nivel pokemons, segundo nivel currentePokemons y 3 niivel favorite
      const isFavorite = state.getIn([
        'pokemons',
        currentPokemonIndex,
        'favorite',
      ]);

      return state.setIn(
        ['pokemons', currentPokemonIndex, 'favorite'],
        !isFavorite
      );
      //this is the same as below
      //const isFavorite = state.get('pokemons').get(currentPokemonsIndex).get('favorite')
  
    default:
      return state;
  }
} 