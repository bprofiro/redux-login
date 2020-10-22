import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Banner = styled.div`
  height: 100vh;
  flex: 1;
  background: #7005f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  flex: 1;
`;

export const Login = styled.div`
  display: flex;
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

  input {
    width: 352px;
    height: 56px;
    font-weight: 500;
    background: #1c1d21;
    color: #727375;
    border-radius: 10px;
    padding: 16px;
    border: 2px solid #727375;

    & + input {
      margin-top: 8px;
    }
  }

  button {
    width: 352px;
    height: 56px;
    background: #7005f7;
    border-radius: 10px;
    margin-top: 24px;
    border: none;
    font-weight: 500;

    &:hover {
      background: ${shade(0.2, '#7005f7')};
    }
  }

  span {
    margin-top: 24px;
  }

  a {
    text-decoration: none;
    color: #7005f7;

    &:hover {
      color: ${shade(0.2, '#7005F7')};
    }
  }
`;
