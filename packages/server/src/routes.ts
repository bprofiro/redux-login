import { Router } from 'express';
import UserRepository from './repositories/UserRepository';
import CreateUserService from './services/CreateUserService';
import AuthenticateUserService from './services/AuthenticateUserService';

const routes = Router();
const userRepository = new UserRepository();

routes.post('/create', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService(userRepository);

  try {
    const user = await createUserService.execute({ name, email, password });

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/signin', async (request, response) => {
  const { email, password } = request.body;

  try {
    const authenticateUserService = new AuthenticateUserService(userRepository);

    const user = await authenticateUserService.execute({ email, password });

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default routes;
