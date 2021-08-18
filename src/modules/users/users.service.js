import User from './user.js';
import albumService from '../albums/albums.service.js';
import postService from '../posts/posts.service.js';
import todoService from '../todos/todos.service.js';

class UserService {
  async create(user) {
    return User.create({
      ...user,
    });
  }

  async getAll() {
    return User.find().sort({ _id: 1 }).exec();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    return User.findById(id).exec();
  }

  async findOneById(id) {
    return User.findOne({ id }).exec();
  }

  async update(user) {
    if (!user._id) {
      throw new Error('ID not request');
    }
    return User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
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
