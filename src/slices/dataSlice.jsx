import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';


const initialState = {
  pokemons:[],
  pokemonSearchs: [],
}
export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async(_,{dispatch}) => {
   
    const pokemonsRes = await getPokemon();
    const pokemonsdetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsdetailed));
    dispatch(setLoading(false));
  }
)
export const dataSlice = createSlice({
  name: 'data',
  initialState,
    reducers:{
      setPokemons: (state, action) => {
        state.pokemons = action.payload;
        state.pokemonSearchs = action.payload;
      },
      setFavorite: (state, action) => {
      
        const currentPokemonIndex = state.pokemonsSearchs.findIndex((pokemon) => {
          return pokemon.id === action.payload.pokemonId;
        });

        if (currentPokemonIndex > 0) {
          const isFavorite = state.pokemons[currentPokemonIndex].favorite
          state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite
        }

        if (currentSearchsPokemonIndex >= 0) {
          const isFavorite = state.pokemonSearchs[currentPokemonIndex].favorite
          state.pokemonSearchs[currentPokemonIndex].favorite  = !isFavorite
        }
      },

      setSearchs: (state, action) => {
        const pokemonSearchs = state
            .pokemons
            .filter( pokemon => pokemon.name.includes( action.payload ) )
        state.pokemonsSearchs = pokemonSearchs ;
      }
    }
  }  
)

export const { setFavorite, setPokemons, setSearchs } = dataSlice.actions;
console.log('🚀 ~ file: dataSlice.js ~ line 29 ~ dataSlice', dataSlice);

export default dataSlice.reducer;