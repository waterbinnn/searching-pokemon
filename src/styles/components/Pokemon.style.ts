import { css } from '@emotion/react';
import { colors } from '../theme';

export const main = css`
  margin: 0 auto 50px;
  width: fit-content;
`;

export const pokeContainer = css`
  margin: 30px auto 0;
`;

export const pokeWrapper = css`
  position: relative;
  width: 250px;
  height: 320px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const pokeId = css`
  display: block;
  font-size: 15px;
  margin-bottom: 6px;
  color: ${colors.secondary};
`;

export const pokeName = css`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.secondary};
`;

export const pokeImg = css`
  display: block;
  margin: -20px auto;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const pokeInfo = css`
  position: absolute;
  left: 20px;
  bottom: -30px;
  margin: 20px 0 0;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  color: ${colors.gray};

  tbody {
    height: 120px;
  }

  tr {
    display: table;
    margin-bottom: 8px;
  }
  th {
    display: inline-block;
    margin-right: 5px;
  }
`;
