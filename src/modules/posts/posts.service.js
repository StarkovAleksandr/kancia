import Post from './post.js';

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
}

export default new PostService();
