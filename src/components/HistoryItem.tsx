/** @jsxImportSource @emotion/react */

import { historyLi } from '../styles/components/History.style';

const HistoryItem = () => {
  return (
    <li css={historyLi}>
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/210226041521-03-pokemon-anniversary-design-full-169.jpg"
        alt=""
      />
      <span>#1</span>
      <strong>Name</strong>
      <button type="button">✕</button>
    </li>
  );
};

export default HistoryItem;
