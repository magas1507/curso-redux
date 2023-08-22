import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  bgColor: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
})

export const { setLoading, setBgColor } = uiSlice.actions;

export default uiSlice.reducer;