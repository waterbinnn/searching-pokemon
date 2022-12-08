import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { colors } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  body {
    width:100%;
    height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${colors.black};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input {
    outline: none;
    margin: 0;
  }

  textarea {
    outline: none;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; 
    border: none;
  }

  svg, image, video {
    vertical-align: top;
  }
`;
