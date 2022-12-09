import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from './pokeSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
