/** @jsxImportSource @emotion/react */
import { errorMsg } from '../styles/components/State.style';

const ErrorMsg = () => {
  return (
    <div css={errorMsg}>
      <img src={require('../assets/error.png')} alt="" />
      <strong>ERROR!</strong>
      <p>Sorry man</p>
      <p>You sure you got the right input?</p>
    </div>
  );
};

export default ErrorMsg;
