import Post from './post.js';
import commentService from '../comments/comments.service.js';

class PostService {
  async create(post) {
    return Post.create({ ...post });
  }

  async getAll() {
    return Post.find().exec();
  }

  async getOne(id) {
    return Post.findById(id).populate('user').exec();
  }

  async update(id, update) {
    return Post.findByIdAndUpdate(id, update, {
      new: true,
    });
  }

  async delete(filter) {
    await Post.deleteOne(filter);
  }

  async deleteAllByUserId(id) {
    const data = await Post.find({ user: id }).exec();

    for (const { _id } of data) {
      await this.delete(_id);

      await commentService.deleteAllByPostId(_id);
    }
  }
}

export default new PostService();
