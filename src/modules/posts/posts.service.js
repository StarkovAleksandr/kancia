import Post from './post.js';

class PostService {
  async create(post) {
    const createdPost = await Post.create({ ...post });

    return createdPost;
  }

  async getAll() {
    const posts = await Post.find().exec();

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
    const post = await Post.findByIdAndDelete(id);

    return post;
  }
}

export default new PostService();
