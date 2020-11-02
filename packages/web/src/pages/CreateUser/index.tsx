import React from 'react';
import { Form } from '@unform/web';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { createUserRequest } from '../../store/modules/user/actions';

import Background from '../../assets/Background.svg';
import Input from '../../components/Input';

import { Container, Image, Login, Banner, SignInButton } from './styles';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

const CreateUser: React.FC = () => {
  const dispatch = useDispatch();
  const { loadingCreateUserRequest } = useSelector(
    (state: StoreState) => state.user,
  );

  function handleSubmit(data: CreateUserRequest) {
    dispatch(
      createUserRequest({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    );
  }

  return (
    <Container>
      <Banner>
        <Image src={Background} alt="SignIn image" />
      </Banner>
      <Login>
        <Form onSubmit={handleSubmit}>
          <h1>Crie seu usuário</h1>

          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" type="password" />

          <SignInButton type="submit">
            {loadingCreateUserRequest ? 'Carregando' : 'Criar'}
          </SignInButton>
        </Form>

        <a href="/">voltar</a>
      </Login>
    </Container>
  );
};

export default CreateUser;
