import User from './user.js';
import albumService from '../albums/albums.service.js';
import postService from '../posts/posts.service.js';
import todoService from '../todos/todos.service.js';

class UserService {
  async create(user) {
    const createdUser = await User.create({
      ...user,
    });

    return createdUser;
  }

  async getAll() {
    const users = await User.find().exec();

    return users;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const user = await User.findById(id).exec();

    return user;
  }

  async findOneById(id) {
    return User.findOne({ id }).exec();
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
    await User.findByIdAndDelete(id);

    await albumService.deleteAllByUserId(id);
    await postService.deleteAllByUserId(id);
    await todoService.deleteAllByUserId(id);
  }
}

export default new UserService();
