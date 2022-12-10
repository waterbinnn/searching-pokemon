/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from './PokemonCard';
import HistoryItem from './HistoryItem';
import SearchForm from './SearchForm';

import { addHistory, getData } from '../redux/pokeSlice';

import { main } from '../styles/components/Pokemon.style';
import {
  historyContainer,
  historyWrapper,
} from '../styles/components/History.style';

interface StateType {
  pokemon: {
    historyList: [];
  };
}

const Pokemon = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const data = useSelector(getData);
  const historyList = useSelector(
    (state: StateType) => state.pokemon.historyList
  );

  const getHistory = useCallback(() => {
    let historyItem = {
      id: data.id,
      name: data.name,
      image: data.sprites['front_default'],
    };
    dispatch(addHistory(historyItem));
  }, [data, dispatch]);

  useEffect(() => {
    if (data) {
      getHistory();
    }
  }, [data, getHistory]);

  return (
    <main css={main}>
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsSearched={setIsSearched}
      />
      {isSearched ? <PokemonCard /> : null}

      {historyList.length === 0 ? null : (
        <section css={historyContainer}>
          <h2>History</h2>
          <ol css={historyWrapper}>
            {historyList.map((item, key) => (
              <HistoryItem item={item} key={key} />
            ))}
          </ol>
        </section>
      )}
    </main>
  );
};

export default Pokemon;
