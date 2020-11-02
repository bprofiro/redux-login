<<<<<<< Updated upstream
import React from 'react';

import DashboardImage from '../../assets/Dashboard.svg';

import { Container, Image, Button } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Image src={DashboardImage} alt="Background" />

      <Button type="submit">Sair</Button>
=======
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import DashboardImage from '../../assets/Dashboard.svg';
import MobileDashboardImage from '../../assets/MobileDashboard.svg';
import { StoreState } from '../../store/createStore';
import { signOutRequest } from '../../store/modules/auth/actions';

import { Container, ImageMobile, Image, SignOutButton } from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, token } = useSelector((state: StoreState) => state.auth);

  console.log(user);

  const handleSubmit = useCallback(() => {
    dispatch(signOutRequest({ user, token }));

    history.push('/');
  }, [dispatch, history, token, user]);

  return (
    <Container>
      <Image src={DashboardImage} alt="Background" />
      <ImageMobile src={MobileDashboardImage} alt="Background" />

      <SignOutButton type="button" onClick={handleSubmit}>
        Sair
      </SignOutButton>
>>>>>>> Stashed changes
    </Container>
  );
};

export default Dashboard;
