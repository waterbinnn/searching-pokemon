import { css } from '@emotion/react';
import { colors } from '../theme';

export const historyContainer = css`
  margin: 40px auto;
  padding-bottom: 50px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`;
export const historyWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const historyLi = css`
  display: flex;
  align-items: center;
  position: relative;
  padding: 6px 10px;
  width: 100%;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: ${colors.white};
  background-color: ${colors.secondary};
  border-radius: 2px;

  img {
    margin-right: 15px;
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 9999px;
  }

  span {
    margin-right: 5px;
  }

  button {
    position: absolute;
    top: 11px;
    right: 8px;
    font-size: 20px;
    color: ${colors.white};
  }
`;
