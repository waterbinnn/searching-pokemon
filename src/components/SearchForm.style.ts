import { css } from '@emotion/react';
import { colors } from '../styles/theme';

export const formContainer = css`
  width: 100%;

  label {
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 8px;
  }
`;

export const inputWrapper = css`
  width: 100%;
  display: flex;

  input {
    padding: 10px 12px;
    border: 1px solid ${colors.primary};
    margin-right: 10px;
    width: 100%;
  }

  button {
    width: 60px;
    background-color: ${colors.primary};
  }
`;
