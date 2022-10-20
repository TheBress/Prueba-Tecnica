import { Logo } from '../components/logo';
import { data } from 'apps/frontend/src/DB';
import {
  AsteriskSpan,
  Buttoninput,
  CheckboxLogin,
  FormContainer,
  GridLoginContainer,
  LabelInput,
  LinkLogin,
  LoginContainer,
  LoginInput,
  ErrorMessage,
  PasswordWrapper,
  EyeContainer,
  CheckboxContainer,
} from '../styles/login/styles';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const Login = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      setLoading(true);
      e.preventDefault();

      const isAuth = data.filter((user) => user.username === name);

      if (!isAuth.length) {
        setError(true);
        setLoading(false);
      } else {
        localStorage.setItem('auth-id', isAuth[0]._id);
        navigate('/');
      }
    },
    [name, password, setError, setLoading]
  );

  const changePasswordVisibility = () => {
    if (passwordVisible) setPasswordVisible(false);
    else setPasswordVisible(true);
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Logo isWhite={false} />
        <LabelInput>
          <AsteriskSpan>*</AsteriskSpan> Nombre de usuario:
        </LabelInput>
        <LoginInput
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></LoginInput>
        <LabelInput>
          <AsteriskSpan>*</AsteriskSpan> Contraseña:
        </LabelInput>
        <PasswordWrapper>
          <LoginInput
            type={!passwordVisible ? 'password' : 'text'}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></LoginInput>

          <EyeContainer onClick={changePasswordVisibility}>
            {!passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </EyeContainer>
        </PasswordWrapper>
        <GridLoginContainer>
          <CheckboxContainer>
            <CheckboxLogin type="checkbox" name=""></CheckboxLogin>
            Remember me
          </CheckboxContainer>

          <div>
            <LinkLogin href="#">Olvidé mi contraseña</LinkLogin>
          </div>
        </GridLoginContainer>

        {error && (
          <ErrorMessage>
            El nombre de usuario o la contraseña no son correctas
          </ErrorMessage>
        )}
        <Buttoninput type="submit" disabled={loading}>
          Iniciar sesión
        </Buttoninput>
      </FormContainer>
    </LoginContainer>
  );
};
