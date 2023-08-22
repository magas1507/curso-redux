import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  searchPokemons: [],
  listPokemonsFavorites: [],
  isSearch: false,
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    filterPokemonSearch: (state, action) => {
      if (action.payload.length > 0) {
        state.isSearch = true
        state.searchPokemons = action.payload
      } else {
        state.isSearch = false
      }
    },
    setFavorite: (state, action) => {
      const updateFavorite = (listPokemons, action) => {
        const currentPokemonIndexSearch = listPokemons.findIndex(
          (pokemon) => pokemon.id === action.payload.pokemonId
        )

        if (currentPokemonIndexSearch >= 0) {
          const isFavorite = listPokemons[currentPokemonIndexSearch].favorite

          listPokemons[currentPokemonIndexSearch].favorite = !isFavorite
        }
      }

      if (state.isSearch) {
        updateFavorite(state.searchPokemons, action)
      }

      updateFavorite(state.pokemons, action)

      const thisPokemon = state.pokemons.filter(
        (pokemon) => pokemon.id === action.payload.pokemonId
      )

      if (thisPokemon[0].favorite) {
        state.listPokemonsFavorites.push(thisPokemon[0])
      } else {
        state.listPokemonsFavorites = state.listPokemonsFavorites.filter(
          (pokemon) => pokemon.id !== action.payload.pokemonId
        )
      }
    },
  },
});

export const { setFavorite, setPokemons,filterPokemonSearch} = dataSlice.actions;
console.log('🚀 ~ file: dataSlice.js ~ line 29 ~ dataSlice', dataSlice);

export default dataSlice.reducer;