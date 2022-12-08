/** @jsxImportSource @emotion/react */
import { main } from '../styles/components/Pokemon.style';

import PokemonCard from './PokemonCard';
import HistoryItem from './HistoryItem';
import SearchForm from './SearchFrom';
import {
  historyContainer,
  historyWrapper,
} from '../styles/components/History.style';

const Pokemon = () => {
  return (
    <main css={main}>
      <SearchForm />
      <PokemonCard />

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
