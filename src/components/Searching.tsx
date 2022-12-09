/** @jsxImportSource @emotion/react */

import { searching } from '../styles/components/State.style';

const Searching = () => {
  return (
    <div css={searching}>
      <img src={require('../assets/pokeball.png')} alt="" />
      <strong>Searching...</strong>
    </div>
  );
};

export default Searching;
