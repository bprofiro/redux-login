<<<<<<< Updated upstream
import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;
=======
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 352px;
  height: 56px;
  background: #1c1d21;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #727375;
  color: #727375;
  display: flex;
  align-items: center;

>>>>>>> Stashed changes
  & + div {
    margin-top: 8px;
  }

<<<<<<< Updated upstream
=======
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #7005f7;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #7005f7;
    `}

>>>>>>> Stashed changes
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
<<<<<<< Updated upstream
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
=======

    &::placeholder {
      color: #f4ede8;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled.span`
  margin-left: 16px;
  align-self: flex-start;
  font-size: 14px;
  color: #c53030;
`;
>>>>>>> Stashed changes
