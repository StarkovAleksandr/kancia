import Todo from './todo.js';

class TodoService {
  async create(todo) {
    return Todo.create({
      ...todo,
    });
  }

  async getAll() {
    return Todo.find().exec();
  }

  async getOne(id) {
    return Todo.findById(id).populate('user').exec();
  }

  async update(id, update) {
    return Todo.findByIdAndUpdate(id, update, {
      new: true,
    });
  }

  async delete(filter) {
    await Todo.deleteOne(filter);
  }
}

export default new TodoService();
