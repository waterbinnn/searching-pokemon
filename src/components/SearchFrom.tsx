/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchPokemon } from '../redux/pokeSlice';
import {
  formContainer,
  inputWrapper,
} from '../styles/components/SearchForm.style';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchPokemon(inputValue));
    setInputValue('');
  };

  return (
    <form css={formContainer} onSubmit={handleSubmit}>
      <label htmlFor="pokemon">Poke-Id or Name</label>
      <div css={inputWrapper}>
        <input
          type="text"
          id="pokemon"
          value={inputValue}
          onChange={handleInput}
        />
        <button type="submit">🔍</button>
      </div>
    </form>
  );
};

export default SearchForm;
