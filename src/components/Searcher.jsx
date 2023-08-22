import React from 'react'
import { Input } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { filterPokemonSearch } from '../slices/dataSlice';
import { setFilled, setValue, setMatchSearch } from '../slices/searchSlice.jsx';
import { setBgColor } from '../slices/uiSlice'

const Searcher = () => {
  const state = useSelector((state) => state.data, shallowEqual)
  const { loading, bgColor } = useSelector((state) => state.ui, shallowEqual)
  const search = useSelector((state) => state.search, shallowEqual)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setValue(e.target.value))
    if (e.target.value !== '') {
      dispatch(setBgColor(true))
      const searchResult = state.pokemons.filter((pokemon) => {
        const name = pokemon.name.toLocaleLowerCase()
        const value = e.target.value.toLocaleLowerCase()

        return name.includes(value)
      })

      if (searchResult.length === 0) {
        dispatch(setMatchSearch(true))
        return
      }
      dispatch(setMatchSearch(false))
      dispatch(filterPokemonSearch(searchResult))
    } else {
      dispatch(setMatchSearch(false));
      dispatch(filterPokemonSearch([]));
      dispatch(setBgColor(false));
    }
  }

  const handleBlur = () => {
    if (search.value === '') dispatch(setFilled(false))
  }

  const handleFocus = () => {
    dispatch(setFilled(true))
  }

  return (
    <>
      <Input
        id='search'
        placeholder='buscar pokemon'
        onChange={handleChange}
        disabled={loading}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete='true'
      />
      <label
        className={`label ${search.filled ? 'filled' : ''} ${bgColor ? 'bgBefore' : ''}`}
        htmlFor='search'
      >
        
      </label>
    </>
  )
}

export default Searcher;