import User from './user.js';

class UserService {
  async create(user) {
    return User.create({
      ...user,
    });
  }

  async getAll() {
    return User.find().exec();
  }

  async getOne(id) {
    return User.findById(id).exec();
  }

  async update(id, update) {
    return User.findByIdAndUpdate(id, update, {
      new: true,
    });
  }

  async delete(filter) {
    await User.deleteOne(filter);
  }
}

export default new UserService();
