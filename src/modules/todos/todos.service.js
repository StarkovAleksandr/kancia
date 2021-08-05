import Todo from './todo.js';

class TodoService {
  async create(todo) {
    const createdTodo = await Todo.create({
      ...todo,
    });

    return createdTodo;
  }

  async getAll() {
    const todos = await Todo.find().exec();

    return todos;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const todo = await Todo.findById(id).populate('user').exec();

    return todo;
  }

  async findOneById(id) {
    return Todo.findOne({ id }).exec();
  }

  async update(todo) {
    if (!todo._id) {
      throw new Error('ID not request');
    }
    const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, {
      new: true,
    });

    return updatedTodo;
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
