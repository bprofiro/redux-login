import { hash } from 'bcryptjs';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

class CreateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
    name,
    email,
    password,
  }: Omit<User, 'id'>): Promise<User> {
    const checkSameEmail = this.userRepository.findByEmail(email);

    if (checkSameEmail) {
      throw new Error('This e-mail already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
