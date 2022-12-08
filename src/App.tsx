/** @jsxImportSource @emotion/react */

import Header from './components/Header';
import Pokemon from './components/Pokemon';

import { container } from './styles/Global.style';

function App() {
  return (
    <>
      <div css={container}>
        <Header />
        <Pokemon />
      </div>
    </>
  );
}

export default App;
