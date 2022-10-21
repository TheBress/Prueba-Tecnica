import { Logo } from '../components/logo';
import {
  Buttoninput,
  CheckboxLogin,
  FormContainer,
  GridLoginContainer,
  LabelInput,
  LinkLogin,
  LoginInput,
  Span,
  PasswordWrapper,
  EyeContainer,
  CheckboxContainer,
} from '../styles/login/styles';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { changePasswordVisibility, getData } from '../functions';

export const Login = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const { data } = getData();
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

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Logo isWhite={false} />
      <LabelInput>
        <Span>*</Span> Nombre de usuario:
      </LabelInput>
      <LoginInput
        type="text"
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></LoginInput>
      <LabelInput>
        <Span>*</Span> Contraseña:
      </LabelInput>
      <PasswordWrapper>
        <LoginInput
          type={!passwordVisible ? 'password' : 'text'}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>

        <EyeContainer
          onClick={() => {
            changePasswordVisibility(passwordVisible, setPasswordVisible);
          }}
        >
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
        <Span isError={true}>
          El nombre de usuario o la contraseña no son correctas
        </Span>
      )}
      <Buttoninput type="submit" disabled={loading}>
        Iniciar sesión
      </Buttoninput>
    </FormContainer>
  );
};
