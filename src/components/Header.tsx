/** @jsxImportSource @emotion/react */

import { headerWrapper, title } from './Header.style';

const Header = () => {
  return (
    <header>
      <div css={headerWrapper}>
        <h1 css={title}>SEARCH YOUR POKEMON</h1>
      </div>
    </header>
  );
};

export default Header;
