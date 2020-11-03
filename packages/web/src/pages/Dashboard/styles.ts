import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ImageMobile = styled.img`
  @media (min-width: 440px) {
    display: none;
  }
`;

export const Image = styled.img`
  @media (max-width: 440px) {
    display: none;
  }
`;

export const SignOutButton = styled.button`
  width: 110px;
  height: 56px;
  border: none;
  border-radius: 10px;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;
  background: #7005f7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;

  @media (max-width: 440px) {
    margin-top: 34px;
  }

  /* @media (max-width: 550px) {
    margin: none;
    position: fixed;
    left: 40%;
    top: 85%;
  } */

  &:hover {
    background: ${shade(0.2, '#7005f7')};
  }
`;
