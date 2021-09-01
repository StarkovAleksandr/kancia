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
      const { id } = req.params;
      const existPost = await postService.getOne(id);
      if (!existPost)
        return res.status(404).send(`Post by id #${id} is not defined`);

      return res.json(existPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const existPost = await postService.getOne(id);
      if (!existPost)
        return res.status(404).send(`Post by id #${id} is not defined`);

      const updatedPost = await postService.update(id, req.body);

      return res.json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const existPost = await postService.getOne(id);
      if (!existPost)
        return res.status(404).send(`Post by id #${id} is not defined`);

      await postService.delete(existPost);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostController();
