import Todo from './todo.js';

class TodoService {
  async create(todo) {
    return Todo.create({
      ...todo,
    });
  }

  async getAll() {
    return Todo.find().sort({ _id: 1 }).exec();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    return Todo.findById(id).populate('user').exec();
  }

  async findOneById(id) {
    return Todo.findOne({ id }).exec();
  }

  async update(todo) {
    if (!todo._id) {
      throw new Error('ID not request');
    }
    return Todo.findByIdAndUpdate(todo._id, todo, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    await Todo.findByIdAndDelete(id);
  }

  async deleteAllByUserId(id) {
    const data = await Todo.find({ user: id }).exec();

    for (const { _id } of data) {
      await this.delete(_id);
    }
  }
}

export default new TodoService();
