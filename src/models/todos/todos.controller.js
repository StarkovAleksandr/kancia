import TodoService from "./todos.service.js";

class TodoController {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body);
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const todo = await TodoService.getOne(req.params.id);
      return res.json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedTodo = await TodoService.update(req.body);
      return res.json(updatedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const todo = await TodoService.delete(req.params.id);
      return res.json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new TodoController();
