import userService from './users.service.js';
class UserController {
  async create(req, res) {
    try {
      const user = await userService.create({ ...req.body });

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const users = await userService.getAll();

      return res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const existUser = await userService.getOne(id);
      if (!existUser)
        return res.status(404).send(`User by id #${id} is not defined`);

      return res.json(existUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const existUser = await userService.getOne(id);
      if (!existUser)
        return res.status(404).send(`User by id #${id} is not defined`);

      const updatedUser = await userService.update(id, req.body);

      return res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const existUser = await userService.getOne(id);
      if (!existUser)
        return res.status(404).send(`User by id #${id} is not defined`);

      await userService.delete(existUser);

      return res.send(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new UserController();
