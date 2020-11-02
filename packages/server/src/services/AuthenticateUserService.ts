import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface RequestAuthentication {
  email: string;
  password: string;
}

interface ResponseAuthentication {
  user: User;
  token: string;
}

class AuthenticateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
    email,
    password,
  }: RequestAuthentication): Promise<ResponseAuthentication> {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('This e-mail does not exist.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('E-mail/Password does not match.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
