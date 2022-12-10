/** @jsxImportSource @emotion/react */

import { useDispatch } from 'react-redux';
import { deleteHistory } from '../redux/pokeSlice';
import { historyLi } from '../styles/components/History.style';

type HistoryItemType = {
  item: {
    id: number;
    name: string;
    image: string;
  };
};

const HistoryItem = (props: HistoryItemType) => {
  const { item } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteHistory(item.id));
  };

  return (
    <li css={historyLi} key={item.id}>
      <img src={item.image} alt="" />
      <span>#{item.id}</span>
      <strong>{item.name}</strong>
      <button type="button" onClick={handleDelete}>
        ✕
      </button>
    </li>
  );
};

export default HistoryItem;
