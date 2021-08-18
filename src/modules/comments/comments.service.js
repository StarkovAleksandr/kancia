import Comment from './comment.js';

class CommentService {
  async create(comment) {
    return Comment.create({
      ...comment,
    });
  }

  async getAll() {
    return Comment.find().exec();
  }

  async getOne(id) {
    return Comment.findById(id).populate('post').exec();
  }

  async update(id, update) {
    return Comment.findByIdAndUpdate(id, update, {
      new: true,
    });
  }

  async delete(filter) {
    await Comment.deleteOne(filter);
  }
}

export default new CommentService();
