import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Banner = styled.div`
  width: 60%;
  height: 100vh;
  flex: 1;
  background: #7005f7;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 940px) {
    display: none;
  }
`;

export const Image = styled.img``;

export const Login = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  place-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 32px;
  }

  a {
    text-decoration: none;
    color: #7005f7;

    &:hover {
      color: ${shade(0.2, '#7005F7')};
    }
  }
`;

export const SignInButton = styled.button`
  width: 320px;
  height: 56px;
  border: none;
  border-radius: 10px;
  margin-top: 24px;
  margin-right: auto;
  margin-left: auto;
  background: #7005f7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff !important;

  &:hover {
    background: ${shade(0.2, '#7005f7')};
  }
`;

export const CreateUserContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
