import styled from 'styled-components';
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom';

>>>>>>> Stashed changes
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

<<<<<<< Updated upstream
export const Image = styled.img``;

export const Button = styled.button`
=======
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
>>>>>>> Stashed changes
  width: 110px;
  height: 56px;
  border: none;
  border-radius: 10px;
<<<<<<< Updated upstream
  margin-top: -20px;
  margin-right: auto;
  margin-left: auto;
  background: #7005f7;
=======

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
>>>>>>> Stashed changes

  &:hover {
    background: ${shade(0.2, '#7005f7')};
  }
`;
