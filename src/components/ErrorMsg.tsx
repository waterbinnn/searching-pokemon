/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { errorMsg } from '../styles/components/State.style';
import Searching from './Searching';

const ErrorMsg = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    if (count === 4) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      {count === 4 ? (
        <div css={errorMsg}>
          <img src={require('../assets/error.png')} alt="" />
          <strong>ERROR!</strong>
          <p>Sorry man</p>
          <p>You sure you got the right input?</p>
        </div>
      ) : (
        <Searching />
      )}
    </>
  );
};

export default ErrorMsg;
