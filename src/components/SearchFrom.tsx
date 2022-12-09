/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchPokemon } from '../redux/pokeSlice';
import {
  formContainer,
  inputWrapper,
} from '../styles/components/SearchForm.style';

type SearchFormType = {
  inputValue: string | number;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchForm = (props: SearchFormType) => {
  const { inputValue, setInputValue, setIsSearched } = props;
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchPokemon(inputValue));
    setIsSearched(true);
    setInputValue('');
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form css={formContainer} onSubmit={handleSubmit}>
      <label htmlFor="pokemon">Poke-Id or Name</label>
      <div css={inputWrapper}>
        <input
          type="text"
          id="pokemon"
          value={inputValue}
          onChange={handleInput}
          ref={inputRef}
        />
        <button type="submit">🔍</button>
      </div>
    </form>
  );
};

export default SearchForm;
