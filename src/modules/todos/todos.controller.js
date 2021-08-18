import todoService from './todos.service.js';
class TodoController {
  async create(req, res) {
    try {
      const todo = await todoService.create({ ...req.body });

      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const todos = await todoService.getAll();

      return res.json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const existTodo = await todoService.getOne(id);
      if (!existTodo)
        return res.status(404).send(`Todo by id #${id} is not defined`);

      return res.json(existTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const existTodo = await todoService.getOne(id);
      if (!existTodo)
        return res.status(404).send(`Todo by id #${id} is not defined`);

      const updatedTodo = await todoService.update(id, req.body);

      return res.json(updatedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const existTodo = await todoService.getOne(id);
      if (!existTodo)
        return res.status(404).send(`Todo by id #${id} is not defined`);

      await todoService.delete(existTodo);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new TodoController();
