import User from '../models/User';

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ name, email, password }: Omit<User, 'id'>): User {
    const user = new User({ name, email, password });

    this.users.push(user);

    return user;
  }

  public findByEmail(email: string): User | undefined {
    const user = this.users.find(u => u.email === email);

    return user;
  }
}

export default UserRepository;
