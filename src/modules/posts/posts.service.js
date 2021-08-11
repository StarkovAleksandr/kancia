import Post from './post.js';
import commentService from '../comments/comments.service.js';

class PostService {
  async create(post) {
    const createdPost = await Post.create({ ...post });

    return createdPost;
  }

  async getAll() {
    const posts = await Post.find().sort({ _id: 1 }).exec();

    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const post = await Post.findById(id).populate('user').exec();

    return post;
  }

  async findOneById(id) {
    return Post.findOne({ id }).exec();
  }

  async update(post) {
    if (!post._id) {
      throw new Error('ID not request');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });

    return updatedPost;
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
