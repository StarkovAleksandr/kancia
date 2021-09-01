import commentService from './comments.service.js';

class CommentContriller {
  async create(req, res) {
    try {
      const comment = await commentService.create({ ...req.body });

      res.status(200).json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const comments = await commentService.getAll();

      return res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const existComment = await commentService.getOne(id);
      if (!existComment)
        return res.status(404).send(`Comment by id #${id} is not defined`);

      return res.json(existComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const existComment = await commentService.getOne(id);
      if (!existComment)
        return res.status(404).send(`Comment by id #${id} is not defined`);

      const updatedComment = await commentService.update(id, req.body);

      return res.json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const existComment = await commentService.getOne(id);
      if (!existComment)
        return res.status(404).send(`Comment by id #${id} is not defined`);

      await commentService.delete(existComment);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new CommentContriller();
