/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import PokemonCard from './PokemonCard';
import HistoryItem from './HistoryItem';
import SearchForm from './SearchForm';

import { main } from '../styles/components/Pokemon.style';
import {
  historyContainer,
  historyWrapper,
} from '../styles/components/History.style';

const Pokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  return (
    <main css={main}>
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsSearched={setIsSearched}
      />
      {isSearched ? <PokemonCard /> : null}

      <section css={historyContainer}>
        <h2>search history</h2>
        <ol css={historyWrapper}>
          <HistoryItem />
          <HistoryItem />
        </ol>
      </section>
    </main>
  );
};

export default Pokemon;
