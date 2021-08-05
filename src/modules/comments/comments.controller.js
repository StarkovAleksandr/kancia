import commentService from './comments.service.js';

class CommentContriller {
  async create(req, res) {
    try {
      const comment = await commentService.create(req.body);

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
      const comment = await commentService.getOne(req.params.id);

      return res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedComment = await commentService.update(req.body);

      return res.json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const comment = await commentService.delete(req.params.id);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new CommentContriller();
