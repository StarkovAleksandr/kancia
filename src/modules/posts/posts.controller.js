import postService from './posts.service.js';
class PostController {
  async create(req, res) {
    try {
      const post = await postService.create({ ...req.body });

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const posts = await postService.getAll();

      return res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const post = await postService.getOne(req.params.id);

      return res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await postService.update(req.body);

      return res.json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostController();
