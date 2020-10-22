import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Image = styled.img``;

export const Button = styled.button`
  width: 110px;
  height: 56px;
  border: none;
  border-radius: 10px;
  margin-top: -20px;
  margin-right: auto;
  margin-left: auto;
  background: #7005f7;

  &:hover {
    background: ${shade(0.2, '#7005f7')};
  }
`;
