import { css } from '@emotion/react';
import { colors } from '../theme';

export const searching = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  animation: closeSearching 5000ms;

  img {
    width: 50px;
    margin-bottom: 40px;
    animation: searching 1000ms infinite alternate;
  }

  strong {
    font-weight: 700;
    font-size: 20px;
    color: ${colors.primary};
  }

  @keyframes searching {
    0% {
      transform: translate3d(-2px, 5px, -5px);
    }

    50% {
      transform: translate3d(0px, -5px, 0);
    }
    100% {
      transform: translate3d(2px, 5px, -10px);
    }
  }

  @keyframes closeSearching {
    80% {
      opacity: 100;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const errorMsg = css`
  margin: 50px auto;
  color: ${colors.error};
  font-weight: 700;
  animation: showError 1500ms;

  img {
    display: block;
    width: 160px;
    margin: 0 auto;
  }

  strong {
    display: inline-block;
  }

  @keyframes showError {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }
`;
