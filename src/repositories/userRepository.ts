import User from '../models/userModel';

class UserRepository {
  async createUser(user: { username: string; password: string; role: string }): Promise<User> {
    return await User.create(user);
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return await User.findOne({ where: { username } });
  }
}

export default new UserRepository();
