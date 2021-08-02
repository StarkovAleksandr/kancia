import PostService from './posts.service.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const posts = await PostService.getAll();

      return res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);

      return res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);

      return res.json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);

      return res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostController();
