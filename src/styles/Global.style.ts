import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { colors } from './theme';

export const globalStyle = css`
  ${emotionReset},
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
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

  svg,
  image,
  video {
    vertical-align: top;
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

export const container = css`
  margin: 0 10px;
`;
