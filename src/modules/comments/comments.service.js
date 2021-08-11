import Comment from './comment.js';

class CommentService {
  async create(comment) {
    const createdComment = await Comment.create({
      ...comment,
    });

    return createdComment;
  }

  async getAll() {
    const comments = await Comment.find().sort({ _id: 1 }).exec();

    return comments;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const comment = await Comment.findById(id).populate('post').exec();

    return comment;
  }

  async findOneById(id) {
    return Comment.findOne({ id }).exec();
  }

  async update(comment) {
    if (!comment._id) {
      throw new Error('ID not request');
    }
    const updatedComment = await Comment.findByIdAndUpdate(
      comment._id,
      comment,
      {
        new: true,
      }
    );

    return updatedComment;
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
