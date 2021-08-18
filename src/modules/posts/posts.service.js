import Post from './post.js';
import commentService from '../comments/comments.service.js';

class PostService {
  async create(post) {
    return Post.create({ ...post });
  }

  async getAll() {
    return Post.find().sort({ _id: 1 }).exec();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    return Post.findById(id).populate('user').exec();
  }

  async findOneById(id) {
    return Post.findOne({ id }).exec();
  }

  async update(post) {
    if (!post._id) {
      throw new Error('ID not request');
    }
    return Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    await Post.findByIdAndDelete(id);

    await commentService.deleteAllByPostId(id);
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
