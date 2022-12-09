import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (term: string | number) => {
    try {
      const response = await axios.get(pokeApi + term);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isLoading: false,
};

const pokeSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state, { payload }) => {
      return { ...state, pokemon: payload, isLoading: true };
    });
    builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => {
      return { ...state, pokemon: payload, isLoading: false };
    });
    builder.addCase(fetchPokemon.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const getData = (state: any) => state.pokemon.pokemon;

export default pokeSlice.reducer;
