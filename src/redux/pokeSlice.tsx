import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (term: string | number) => {
    const response = await axios.get(pokeApi + term);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  term: '',
};

const pokeSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.term = action.payload;
    });
  },
});

export default pokeSlice.reducer;
