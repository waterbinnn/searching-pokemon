/** @jsxImportSource @emotion/react */

import {
  pokeId,
  pokeName,
  pokeWrapper,
  pokeImg,
  pokeContainer,
  pokeInfo,
} from '../styles/components/Pokemon.style';

const PokemonCard = () => {
  return (
    <section css={pokeContainer}>
      <h2 className="visually-hidden">Searched Pokemon</h2>
      <div css={pokeWrapper}>
        <strong css={pokeId}>#4</strong>
        <strong css={pokeName}>name</strong>
        <img
          css={pokeImg}
          src="https://cdn.cnn.com/cnnnext/dam/assets/210226041521-03-pokemon-anniversary-design-full-169.jpg"
          alt=""
        />
        <table css={pokeInfo}>
          <tbody>
            <tr>
              <th>Type :</th>
              <td>Fire</td>
            </tr>
            <tr>
              <th>HP :</th>
              <td>44</td>
            </tr>
            <tr>
              <th>Attack :</th>
              <td>28</td>
            </tr>
            <tr>
              <th>Deffense :</th>
              <td>65</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PokemonCard;
