import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

type InitialStateType = {
  isLoading: boolean;
  historyList: string[];
};

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

const initialState: InitialStateType = {
  isLoading: false,
  historyList: [],
};

const pokeSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.historyList.push(action.payload);
      if (state.historyList.length === 6) {
        state.historyList.shift();
      }
    },
    deleteHistory: (state, action) => {
      state.historyList.forEach((item: any, index) => {
        if (item.id === action.payload) {
          state.historyList.splice(index, 1);
        }
      });
    },
  },
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

export const { addHistory, deleteHistory } = pokeSlice.actions;
export const getData = (state: any) => state.pokemon.pokemon;

export default pokeSlice.reducer;
