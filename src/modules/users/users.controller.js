import UserService from './users.service.js';

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const users = await UserService.getAll();

      return res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);

      return res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.body);

      return res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id);

      return res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new UserController();
