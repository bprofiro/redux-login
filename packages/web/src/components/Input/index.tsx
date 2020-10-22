import React from 'react';

import { Container } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      {/* {Icon && <Icon size={20} />} */}
      <input />

      {/* {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )} */}
    </Container>
  );
};

export default Input;
