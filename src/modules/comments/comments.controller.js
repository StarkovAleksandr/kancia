import CommentService from './comments.service.js';

class CommentContriller {
  async create(req, res) {
    try {
      const comment = await CommentService.create(req.body);

      res.status(200).json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const comments = await CommentService.getAll();

      return res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const comment = await CommentService.getOne(req.params.id);

      return res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedComment = await CommentService.update(req.body);

      return res.json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const comment = await CommentService.delete(req.params.id);

      return res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new CommentContriller();
