import User from './user.js';

class UserService {
  async create(user) {
    const createdUser = await User.create({
      ...user,
    });

    return createdUser;
  }

  async getAll() {
    const users = await User.find();

    return users;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const user = await User.findById(id);

    return user;
  }

  async findOneById(id) {
    return User.findOne({ id });
  }

  async update(user) {
    if (!user._id) {
      throw new Error('ID not request');
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });

    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const user = await User.findByIdAndDelete(id);

    return user;
  }
}

export default new UserService();
