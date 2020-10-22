import React from 'react';

import Background from '../../assets/Background.svg';

import { Container, Image, Login, Banner } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Image src={Background} alt="SignIn image" />
      </Banner>
      <Login>
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="E-mail" />
          <input placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>

        <span>Ainda não tem uma conta?</span>
        <a href="google.com">Criar agora</a>
      </Login>
    </Container>
  );
};

export default SignIn;
