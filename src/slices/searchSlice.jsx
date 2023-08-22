import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  filled: false,
  noMatchSearch: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },

    setFilled: (state, action) => {
      state.filled = action.payload
    },

    setMatchSearch: (state, action) => {
      state.noMatchSearch = action.payload
    },
  },
})

export const { setValue, setFilled, setMatchSearch } = searchSlice.actions;

export default searchSlice.reducer;