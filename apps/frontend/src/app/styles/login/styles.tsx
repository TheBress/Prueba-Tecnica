import styled from 'styled-components';

const LoginContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98vh;
  margin: 0 auto;
  width: 30vw;
  @media (max-width: 1224px) {
    width: 70vw;
  }
`;

const AsteriskSpan = styled.span`
  color: #fb5a5a;
`;

const LoginInput = styled.input`
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  width: 100%;
`;

const LoginSvg = styled.svg``;

const LabelInput = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 10px;
`;

const Buttoninput = styled.button`
  background: #262d34;
  border-radius: 8px;
  width: auto;
  margin: 0 auto;
  color: white;
  padding: 6px 10px;
  cursor: pointer;
  border: none;
  font-size: 17px;
  &:disabled {
    cursor: auto;
    background: #7d95ae;
  }
`;

const GridLoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  margin-bottom: 10px;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;

const CheckboxLogin = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 1.15em;
  height: 1.15em;
  border: 1px solid #dbdbdb;
  display: grid;
  place-content: center;

  &:checked {
    background: red;
  }
`;

const LinkLogin = styled.a`
  text-decoration: none;
  color: #9e9e9e;
  float: right;
`;

const RememberSpan = styled.span`
  margin-bottom: 200px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin: 8px 0px;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 30vw;
  @media (max-width: 1224px) {
    width: 70vw;
  }
`;

const EyeContainer = styled.div`
  position: absolute;
  top: 22%;
  left: 96%;
`;

export {
  LoginContainer,
  FormContainer,
  AsteriskSpan,
  LoginInput,
  LabelInput,
  LoginSvg,
  Buttoninput,
  GridLoginContainer,
  CheckboxLogin,
  LinkLogin,
  RememberSpan,
  ErrorMessage,
  PasswordWrapper,
  EyeContainer,
  CheckboxContainer,
};
