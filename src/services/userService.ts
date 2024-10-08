import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository';
import User from '../models/userModel';

class UserService {
  async authenticate(username: string, password: string): Promise<User | null> {
    const user = await userRepository.findUserByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async register(username: string, password: string, role: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.createUser({ username, password: hashedPassword, role });
  }
}

export default new UserService();
