import { v4 as uuid } from 'uuid';

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  constructor({ name, email, password }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
