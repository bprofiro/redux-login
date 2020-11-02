import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../store/createStore';
import { authRequest } from '../../store/modules/auth/actions';

import Background from '../../assets/Background.svg';
import Input from '../../components/Input';

import {
  Container,
  Image,
  Login,
  Banner,
  SignInButton,
  CreateUserContent,
} from './styles';

interface SignInRequest {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { loadingSignInRequest, user } = useSelector(
    (state: StoreState) => state.auth,
  );

  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  console.log(user);

  const handleSubmit = useCallback(
    (data: SignInRequest) => {
      dispatch(authRequest({ email: data.email, password: data.password }));

      history.push('/dashboard');
    },
    [dispatch, history],
  );

  return (
    <Container>
      <Banner>
        <Image src={Background} alt="SignIn image" />
      </Banner>
      <Login>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" type="password" />

          <SignInButton type="submit">
            {loadingSignInRequest ? 'Carregando' : 'Entrar'}
          </SignInButton>
        </Form>

        <CreateUserContent>
          <span>Ainda não tem uma conta?</span>
          <a href="/create-user">Criar agora</a>
        </CreateUserContent>
      </Login>
    </Container>
  );
};

export default SignIn;
