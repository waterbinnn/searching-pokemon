/** @jsxImportSource @emotion/react */
import {
  formContainer,
  inputWrapper,
} from '../styles/components/SearchForm.style';

const SearchForm = () => {
  return (
    <form css={formContainer}>
      <label htmlFor="pokemon">Poke-Id or Name</label>
      <div css={inputWrapper}>
        <input type="text" id="pokemon" />
        <button type="submit">🔍</button>
      </div>
    </form>
  );
};

export default SearchForm;
