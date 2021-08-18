import Comment from './comment.js';

class CommentService {
  async create(comment) {
    return Comment.create({
      ...comment,
    });
  }

  async getAll() {
    return Comment.find().sort({ _id: 1 }).exec();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    return Comment.findById(id).populate('post').exec();
  }

  async findOneById(id) {
    return Comment.findOne({ id }).exec();
  }

  async update(comment) {
    if (!comment._id) {
      throw new Error('ID not request');
    }
    return Comment.findByIdAndUpdate(comment._id, comment, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    await Comment.findByIdAndDelete(id);
  }

  async deleteAllByPostId(id) {
    const data = await Comment.find({ post: id }).exec();

    for (const { _id } of data) {
      await this.delete(_id);
    }
  }
}

export default new CommentService();
