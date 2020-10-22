import React from 'react';

import DashboardImage from '../../assets/Dashboard.svg';

import { Container, Image, Button } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Image src={DashboardImage} alt="Background" />

      <Button type="submit">Sair</Button>
    </Container>
  );
};

export default Dashboard;
