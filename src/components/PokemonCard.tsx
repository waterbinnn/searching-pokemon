/** @jsxImportSource @emotion/react */

import {
  pokeId,
  pokeName,
  pokeWrapper,
  pokeImg,
  pokeContainer,
  pokeInfo,
} from '../styles/components/Pokemon.style';
import { useSelector } from 'react-redux';
import { getData } from '../redux/pokeSlice';
import ErrorMsg from './ErrorMsg';

const PokemonCard = () => {
  const data = useSelector(getData);

  return (
    <>
      {!data ? (
        <ErrorMsg />
      ) : (
        <section css={pokeContainer}>
          <h2 className="visually-hidden">Searched Pokemon</h2>
          <div css={pokeWrapper}>
            <strong css={pokeId}>#{data.id}</strong>
            <strong css={pokeName}>{data.name}</strong>
            <img
              css={pokeImg}
              src={data.sprites['front_default']}
              alt={data.name}
            />
            <table css={pokeInfo}>
              <tbody>
                <tr>
                  <th>Type :</th>
                  <td>{data.types[0].type.name}</td>
                </tr>
                <tr>
                  <th>HP :</th>
                  <td>{data.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <th>Attack :</th>
                  <td>{data.stats[1].base_stat}</td>
                </tr>
                <tr>
                  <th>Deffense :</th>
                  <td>{data.stats[2].base_stat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
};

export default PokemonCard;
